import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter} from "react-router-dom"
import {
  Home,
  Nav,
} from "./components"

// import { fetchPublicRoutines, fetchAllActivities } from './api/index';




const App = ()=> {
  useEffect(() => {
  }, [])
  return (
    <div>
      <h1>Fitness Trc.kr</h1>
      <Nav />
      <Routes>
        <Route exact path="/" 
          element={
            <Home />
          }
        />
      </Routes>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);
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
