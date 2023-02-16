import React from "react";
import { Navigate } from "react-router-dom";

const Logout = (props) => {
  const { setToken } = props;
  window.localStorage.removeItem("token");
  setToken("")
  return <Navigate to="/" />;
};

export default Logout;
