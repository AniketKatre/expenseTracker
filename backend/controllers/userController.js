const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userController = {
  // register user
  register: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    // console.log({ username, email, password });

    // validation
    if (!username || !email || !password) {
      throw new Error("Please all fields are required.");
    }

    // check if user already exist by email
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exist...");
    }

    //hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user and saved to DB
    const userCreated = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    res.json({
      username: userCreated.username,
      email: userCreated.email,
      id: userCreated._id,
    });
  }),

  // login user
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //check valid email
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid Login credential...");
    }

    //campare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid Login credentials...");
    }

    //generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    //send the response
    res.status(200).json({
      message: "Login Sucessfully",
      username: user.username,
      token,
      email: user.email,
      id: user._id,
    });
  }),

  // my profile
  profile: asyncHandler(async (req, res) => {
    const user = await User.findById(req.user);
    if (!user) {
      throw new Error("User not found, login again...");
    }

    //send response
    res.json({ username: user.username, email: user.email });
  }),

  //change password
  changePassword: asyncHandler(async (req, res) => {
    const { newPassword } = req.body;

    const user = await User.findById(req.user);
    if (!user) {
      throw new Error("user not found");
    }

    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    //save to DB
    user.password = hashedPassword;

    await user.save();

    res.status(201).json({ message: "Password Changed Sucessfully..." });
  }),

  // update profile
  updateUserProfile: asyncHandler(async (req, res) => {
    const { email, username } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user,
      { username, email },
      { new: true }
    );

    res.json({ message: "User profile Updated successfully.", updatedUser });
  }),
};

module.exports = userController;
