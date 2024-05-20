const express = require("express");
require("dotenv").config();
const connetDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const transactionRouter = require("./routes/transactionRoutes");
const errorHandler = require("./middlewares/errorHandlerMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;

//mongoBD
connetDB();

//middleware
app.use(express.json());

//routes
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);

// error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
