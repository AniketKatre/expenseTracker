const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  const headerObj = req.headers;
  const token = headerObj?.authorization?.split(" ")[1];

  //verify token
  const verifyToken = jwt.verify(
    token,
    process.env.JWT_SECRET,
    (err, decoded) => {
      //   console.log(decoded);
      if (err) {
        return false;
      } else {
        return decoded;
      }
    }
  );

  //save the ser object;
  if (verifyToken) {
    (req.user = verifyToken.id), next();
  } else {
    const err = new Error("Token get expired, Please Login again...");
    console.log(err);
  }
};

module.exports = isAuthenticated;
