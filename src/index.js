import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import { AllRoutines, Home, Nav, Activities, Login, Register, SingleUserRoutines, MyRoutines } from "./components";
import Logout from "./components/Logout";

// import { fetchPublicRoutines, fetchAllActivities } from './api/index';

const App = () => {
  const [token, setToken] = useState("");
  const location = useLocation();
  const pathname = location.pathname

  const tokenCheck = () => {
    const token = window.localStorage.getItem("token");
    console.log('hi');
    if(token){
      setToken(token);
    } else {
      setToken("");
    }
  } 

  useEffect(() => {
    tokenCheck();
  }, [pathname])

  return (
    <div>
      <Nav token={token}/>
      <Routes>
        <Route exact path="/" element={<Home setToken={setToken} token={token}/>} />
        <Route path="/routines" element={<AllRoutines />} />
        <Route path="/login" element={<Login setToken={setToken} token={token}/>} />
        <Route path="/logout" element={<Logout setToken={setToken} tokenCheck={tokenCheck}/>}/>
        <Route path="/activities" element={<Activities />} />
        <Route path="/register" element={<Register setToken={setToken} token={token}/>}/>
        <Route path="/routines/:creatorName" element={<SingleUserRoutines />}/>
        <Route path="/routines/myactivities" element={<MyRoutines />}/>
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
