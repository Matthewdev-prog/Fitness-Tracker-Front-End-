import React from "react";

const Nav = () => {
  return (
    <div class="topnav">
      <a class="logo" href="#">
        <img class="logo" src="files/ft-logo.png" alt="Site logo" />
      </a>
      <a href="index.html">Home</a>
      <a href="routines.html">Routines</a>
      <a href="activities.html">Activities</a>
      <a class="active" href="#login">
        login
      </a>
    </div>
  );
};

export default Nav;
