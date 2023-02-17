import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = (props) => {
  const {setToken} = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerIssue, setRegisterIssue] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const register = await registerUser({ username, password });
    if (register.error) {
      setRegisterIssue(register.message);
      return;
    }
    const { token } = register;
    window.localStorage.setItem("token", token);
    setToken(token)
    nav("/routines/myactivities")
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if(token){
      nav("/")
    }
  }, []);

  return (
    <div className="loginContainer">
      <div>{registerIssue}</div>

      <div className="container1">

  <div>
  <h1 className="login">Register</h1>
  <p>Start improving your health. Sign up today!</p>
  </div>
    <form className="formContainer" onSubmit={(ev) => handleSubmit(ev)}>
      <div className="formdiv">
        <label>Username</label>
        <input placeholder="Your user name..." value={username} onChange={ev => setUsername(ev.target.value)}/>
      </div>
      <div className="formdiv">
        <label>Password</label>
        <input type="password" placeholder="Your password must be atleast 8 characters long..." value={password} onChange={ev => setPassword(ev.target.value)}/>
      </div>
      <input className="btn" type="submit" value="Register" />
      <p className="smalltext">
       Already have an account? <Link to='/login'>Login here</Link>
      </p>
    </form>
  </div>
  </div>
  )
}

export default Register;
