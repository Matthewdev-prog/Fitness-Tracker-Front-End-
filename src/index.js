import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import { AllRoutines, Home, Nav, Activities, Login, Register, SingleUserRoutines } from "./components";
import Logout from "./components/Logout";

// import { fetchPublicRoutines, fetchAllActivities } from './api/index';

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if(token){
      setToken(token)
    }
  })

  return (
    <div>
      <Nav token={token}/>
      <Routes>
        <Route exact path="/" element={<Home setToken={setToken} token={token}/>} />
        <Route path="/routines" element={<AllRoutines />} />
        <Route path="/login" element={<Login setToken={setToken} token={token}/>} />
        <Route path="/logout" element={<Logout setToken={setToken}/>}/>
        <Route path="/activities" element={<Activities />} />
        <Route path="/register" element={<Register setToken={setToken} token={token}/>}/>
        <Route path="/routines/:creatorName" element={<SingleUserRoutines />}/>
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
