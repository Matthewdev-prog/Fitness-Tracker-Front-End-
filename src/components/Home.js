import React from "react";
import { Login } from ".";

const Home = (props) => {
  const {setToken, token} = props
  return <>
  
  <div class="container">
    <img  className="hero" src="../../assets/files/heropage.png" alt="homepage" /> 
  </div>

  <Login setToken={setToken} token={token}/>
 
  </>;
};

export default Home;
