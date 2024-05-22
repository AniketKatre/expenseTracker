import React from "react";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <div>
      <Link to="/">
        <p style={{ color: "red" }}>Public Navbar</p>{" "}
      </Link>
      <Link to="/login"> Login</Link>
      <Link to="/register"> Register</Link>
    </div>
  );
};

export default PublicNavbar;
