import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <a className="logo" href="#">
        <img
          className="logo"
          src="../../assets/files/ft-logo.png"
          alt="Site logo"
        />
      </a>
      <Link to="/">Home</Link>
      <Link to="/routines">Routines</Link>
      <Link to="/activities">Activities</Link>
      <Link className="active" to="/login">
        login
      </Link>
    </div>
  );
};

export default Nav;

