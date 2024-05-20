const express = require("express");
const userController = require("../controllers/userController");
const isAuthenticated = require("../middlewares/isAuth");

const userRouter = express.Router();

//register user
userRouter.post("/api/v1/users/register", userController.register);
//login user
userRouter.post("/api/v1/users/login", userController.login);

// my profile
userRouter.get(
  "/api/v1/users/profile",
  isAuthenticated,
  userController.profile
);

// chnagedd password
userRouter.put(
  "/api/v1/users/change-password",
  isAuthenticated,
  userController.changePassword
);

// udated profile
userRouter.put(
  "/api/v1/users/update-profile",
  isAuthenticated,
  userController.updateUserProfile
);

module.exports = userRouter;
