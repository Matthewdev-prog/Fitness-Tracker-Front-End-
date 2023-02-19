import React, { useEffect, useState } from "react";
import { getUsersPublicRoutines } from "../api";
import { useLocation } from "react-router-dom";
import Routines from "./Routines";

const SingleUserRoutines = (props) => {
  const { token, user } = props;
  const [userRoutines, setUserRoutines] = useState([]);

  const location = useLocation();
  const pathName = location.pathname;
  const path = pathName.split("/");
  const username = pathName.split("/")[path.length - 1];
  useEffect(() => {
    const getRoutines = async () => {
      const routines = await getUsersPublicRoutines({ username, token });
      setUserRoutines(routines);
    };
    getRoutines();
  }, [username]);

  console.log(userRoutines);
  return (
    <div>
      <Routines routines={userRoutines} user={user} />
    </div>
  );
};

export default SingleUserRoutines;
