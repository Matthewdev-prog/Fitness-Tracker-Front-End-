import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser, loginUser } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginIssue, setLoginIssue] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const login = await loginUser({ username, password });
    if (login.error) {
      setLoginIssue(login.message);
      return;
    }
    const { token } = login;
    window.localStorage.setItem("token", token);
  };

  return (
    <div className="loginContainer">
      <div>{loginIssue}</div>
      <div class="container1">

  <div>
  <h1 className="login">Login</h1>
  <p>Login to start tracking your fitness routines.</p>
  </div>


      <form className="formContainer" onSubmit={(ev) => handleSubmit(ev)}>
        <div className="formdiv">
          <label>User Name</label>
          <input
            placeholder="Your user name..."
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
        </div>
        <div className="formdiv">
          <label>Password</label>
          <input
            type="password"
            placeholder="Your password..."
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <input className="btn" type="submit" value="Submit" />
        <p className="smalltext">
          Need an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;
