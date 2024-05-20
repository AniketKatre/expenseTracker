const asyncHandler = require("express-async-handler");
const Transaction = require("../models/Transaction");

const transactionController = {
  // add transcation
  create: asyncHandler(async (req, res) => {
    const { type, category, amount, date, description } = req.body;

    //validation required
    if (!amount || !type || !date) {
      throw new Error("Type, Amount and Date fields are mandatory...");
    }

    //create transaction
    const transaction = await Transaction.create({
      user: req.user,
      type,
      category,
      amount,
      date,
      description,
    });

    res.status(201).json(transaction);
  }),

  // list of transaction
  getFilteredTransaction: asyncHandler(async (req, res) => {
    const { startDate, endDate, type, category } = req.query;

    let filters = { user: req.user };

    //filter conditions
    if (startDate) {
      filters.date = { ...filters.date, $gte: new Date(startDate) };
    }
    if (endDate) {
      filters.date = { ...filters.date, $lte: new Date(endDate) };
    }
    if (type) {
      filters.type = type;
    }
    if (category) {
      if (category == "All") {
        //no category fill
      } else if (category == "Uncategorized") {
        filters.category = "Uncategorized";
      } else {
        filters.category = category;
      }
    }

    const transaction = await Transaction.find(filters).sort({ date: -1 });
    res.status(200).json(transaction);
  }),

  // update a particy=ular transaction
  update: asyncHandler(async (req, res) => {
    // find the transaction
    const transaction = await Transaction.findById(req.params.id);
    if (transaction && transaction.user.toString() === req.user.toString()) {
      transaction.type = req.body.type || transaction.type;
      transaction.category = req.body.category || transaction.category;
      transaction.amount = req.body.amount || transaction.amount;
      transaction.date = req.body.date || transaction.date;
      transaction.description = req.body.description || transaction.description;

      //update transaction
      const updatedTransaction = await transaction.save();
      res.status(201).json(updatedTransaction);
    }
  }),

  //delete
  delete: asyncHandler(async (req, res) => {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Transaction Deleted sucessfully" });
  }),
};

module.exports = transactionController;
