import React from "react";
import { CreateRoutines, Login } from ".";

const Home = (props) => {
  const { setToken, token } = props;
  return (
    <>
      <div className="container">
        <img
          className="hero"
          src="../../assets/files/heropage.png"
          alt="homepage"
        />
      </div>

      {token ? (
        <CreateRoutines token={token} />
      ) : (
        <Login setToken={setToken} token={token} />
      )}
    </>
  );
};

export default Home;
