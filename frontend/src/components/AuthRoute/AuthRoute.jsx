import React, { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

const AuthRoute = ({ children }) => {
  //token
  const token = getUserFromStorage();
  //   const isLogin = false;
  if (token) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default AuthRoute;
