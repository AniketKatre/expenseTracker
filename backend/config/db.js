const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;

const connectDB = () => {
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Mongoose connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
