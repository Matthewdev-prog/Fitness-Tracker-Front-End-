import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsersPublicRoutines } from "../api";
import { CreateRoutines, Routines } from ".";

const MyRoutines = (props) => {
  const { token, user } = props;
  const { username, id } = user;
  const [routines, setRoutines] = useState("");
  const nav = useNavigate();

  const getRoutines = async () => {
    const myRoutines = await getUsersPublicRoutines({ username, token });
    setRoutines(myRoutines);
  };
  useEffect(() => {
    if (!token) {
      nav("/login");
    }
    getRoutines();
  }, []);
  return (
    <div>
      <CreateRoutines token={token} getRoutines={getRoutines} />
      <div className="my-routines">
        {username}'s Routines!
        <Routines
          routines={routines}
          user={user}
          token={token}
          callback={getRoutines}
        />
      </div>
    </div>
  );
};

export default MyRoutines;
