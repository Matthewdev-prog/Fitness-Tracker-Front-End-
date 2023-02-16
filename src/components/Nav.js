import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const token = window.localStorage.getItem("token");
  return (
    <div className="topnav">
      <Link className="logo" to="/">
        <img
          className="logo"
          src="../../assets/files/ft-logo.png"
          alt="Site logo"
        />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/routines">Routines</Link>
      <Link to="/activities">Activities</Link>
      <Link className="active" to={token ? "/logout" : "/login"}>
        {token ? "logout" : "login"}
      </Link>
    </div>
  );
};

export default Nav;
