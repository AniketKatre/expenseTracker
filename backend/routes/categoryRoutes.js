const express = require("express");
const categoryController = require("../controllers/categoryController");
const categoryRouter = express.Router();

const isAuthenticated = require("../middlewares/isAuth");

categoryRouter.post(
  "/api/v1/category/create",
  isAuthenticated,
  categoryController.create
);

categoryRouter.get(
  "/api/v1/category/lists",
  isAuthenticated,
  categoryController.lists
);

categoryRouter.put(
  "/api/v1/category/update/:id",
  isAuthenticated,
  categoryController.update
);

categoryRouter.delete(
  "/api/v1/category/delete/:id",
  isAuthenticated,
  categoryController.delete
);

module.exports = categoryRouter;
