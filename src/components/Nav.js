import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { token } = props;

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

      {token ? (
        <>
          <Link to="/routines/myroutines">My Routines</Link>
          <Link className="active" to="/logout">
            logout
          </Link>
        </>
      ) : (
        <Link className="active" to="/login">
          login
        </Link>
      )}
    </div>
  );
};

export default Nav;
