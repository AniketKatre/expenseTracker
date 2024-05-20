const express = require("express");
const transactionController = require("../controllers/transactionController");
const isAuthenticated = require("../middlewares/isAuth");
const transactionRouter = express.Router();

//create
transactionRouter.post(
  "/api/v1/transaction/create",
  isAuthenticated,
  transactionController.create
);

//list with filtered
transactionRouter.get(
  "/api/v1/transaction/lists",
  isAuthenticated,
  transactionController.getFilteredTransaction
);

// update with id:
transactionRouter.put(
  "/api/v1/transaction/update/:id",
  isAuthenticated,
  transactionController.update
);

//delete
transactionRouter.delete(
  "/api/v1/transaction/delete/:id",
  isAuthenticated,
  transactionController.delete
);

module.exports = transactionRouter;
