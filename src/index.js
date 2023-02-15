import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import { AllRoutines, Home, Nav, Activities, Login, Register } from "./components";

// import { fetchPublicRoutines, fetchAllActivities } from './api/index';

const App = () => {

  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/routines" element={<AllRoutines />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
};

const root = createRoot(document.querySelector("#root"));

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
