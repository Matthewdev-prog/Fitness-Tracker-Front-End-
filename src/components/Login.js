import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  registerUser,
  loginUser,
} from "../api"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  return (
    <div className="loginContainer">
      <form className="formContainer" onSubmit={(ev) => handleSubmit(ev)}>
        <div className="formdiv">
          <label>User Name</label>
          <input placeholder="Your user name..." value={username} onChange={ev => setUsername(ev.target.value)}/>
        </div>
        <div className="formdiv">
          <label>Password</label>
          <input placeholder="Your password..." value={password} onChange={ev => setPassword(ev.target.value)}/>
        </div>
        <input className="btn" type="submit" value="Submit" />
        <p className="smalltext">
          Need an account? <Link to='/register'>Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
