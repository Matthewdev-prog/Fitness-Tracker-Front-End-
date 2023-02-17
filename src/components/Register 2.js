import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { registerUser } from '../api';


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerIssue, setRegisterIssue] = useState("")
  const handleSubmit = async ev => {
    ev.preventDefault();
    const register = await registerUser({username, password})
    if(register.error){
      setRegisterIssue(register.message);
      return;
    }
    const {token} = register;
    window.localStorage.setItem("token", token)
  }
  return (
    <div className="loginContainer">
      <div>{registerIssue}</div>
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
  )
}

export default Register;
