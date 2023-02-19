import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import { getUserInfo } from "./api";
import {
  AllRoutines,
  Home,
  Nav,
  Activities,
  Login,
  Register,
  SingleUserRoutines,
  MyRoutines,
  SingleActivityRoutines,
} from "./components";
import Logout from "./components/Logout";

// import { fetchPublicRoutines, fetchAllActivities } from './api/index';

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const location = useLocation();
  const pathname = location.pathname;

  const tokenCheck = async () => {
    const token = window.localStorage.getItem("token");
    console.log("hi");
    if (token) {
      setToken(token);
      if (!user) {
        const loggedIn = await getUserInfo(token);
        console.log("LOGGED IN", loggedIn);
        if (!loggedIn.id) {
          return;
        }
        setUser(loggedIn);
      }
    } else {
      setToken("");
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [pathname]);

  return (
    <div>
      <Nav token={token} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home setToken={setToken} token={token} />}
        />
        <Route
          path="/routines"
          element={<AllRoutines token={token} user={user} />}
        />
        <Route
          path="/login"
          element={<Login setToken={setToken} token={token} />}
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/activities" element={<Activities token={token} />} />
        <Route
          path="/register"
          element={<Register setToken={setToken} token={token} />}
        />
        <Route
          path="/routines/:creatorName"
          element={<SingleUserRoutines token={token} user={user} />}
        />
        <Route
          exact
          path="/routines/myroutines"
          element={<MyRoutines token={token} user={user} />}
        />
        <Route
          path="/routines/activity/:id"
          element={<SingleActivityRoutines token={token} user={user} />}
        />
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
