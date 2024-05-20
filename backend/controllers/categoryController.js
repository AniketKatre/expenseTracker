const asyncHandler = require("express-async-handler");
const Category = require("../models/Category");
const Transaction = require("../models/Transaction");
const categoryController = {
  // add category
  create: asyncHandler(async (req, res) => {
    const { type, name } = req.body;

    if (!type || !name) {
      throw new Error("Name and Types are required for creating category.");
    }

    //convert name into lowercase
    const normalized = name.toLowerCase();
    //check if type is valid
    const validTypes = ["income", "expense"];
    if (!validTypes.includes(type.toLowerCase())) {
      throw new Error("Invalid category type " + type);
    }

    //check if category already exists on the users
    const categoryExist = await Category.findOne({
      name: normalized,
      user: req.user,
    });
    if (categoryExist) {
      throw new Error(`Category ${categoryExist.name} is already exists in DB`);
    }

    //create Category
    const category = await Category.create({
      name: normalized,
      type,
      user: req.user,
    });

    res.status(201).json(category);
  }),

  // get all list of category
  lists: asyncHandler(async (req, res) => {
    const categories = await Category.find({ user: req.user });
    res.json({ categories });
  }),

  // update category
  update: asyncHandler(async (req, res) => {
    const { type, name } = req.body;
    const normalized = name.toLowerCase();
    const category = await Category.findById(req.params.id);
    // validation if category not found
    if (!category && category.user.toString() !== req.user.toString()) {
      throw new Error("Category not found! or user not authorized");
    }

    //check if type is valid
    const validTypes = ["income", "expense"];
    if (!validTypes.includes(type.toLowerCase())) {
      throw new Error("Invalid category type " + type);
    }

    const oldname = category.name;
    category.name = normalized;
    category.type = type;

    const updatedCategory = await category.save();

    // update affected transactions...
    if (oldname !== updatedCategory.name) {
      await Transaction.updateMany(
        { user: req.user, category: oldname },
        {
          $set: { category: updatedCategory.name },
        }
      );
      res.json(updatedCategory);
    }
  }),

  //delete category
  delete: asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);

    //authorize  user only able to delete his category
    if (category && category.user.toString() === req.user.toString()) {
      const defaultCategory = "Uncategorized";
      await Transaction.updateMany(
        { user: req.user, category: category.name },
        { $set: { category: defaultCategory } }
      );

      //remove
      await Category.findByIdAndDelete(req.params.id);
      res.json({ message: "Category removed and transation updated..." });
    } else {
      res.json({ message: "Category not found or user is not authorized" });
    }
  }),
};

module.exports = categoryController;
