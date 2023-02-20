import React, { useEffect, useState } from "react";
import { getRoutinesByActivity, getUsersPublicRoutines } from "../api";
import { useLocation } from "react-router-dom";
import { Routines } from ".";

const SingleActivityRoutines = (props) => {
  const { token, user } = props;
  const [routines, setRoutines] = useState([]);
  const location = useLocation();
  const pathName = location.pathname;
  const path = pathName.split("/");
  const id = pathName.split("/")[path.length - 1];

  const getRoutines = async () => {
    const activityRoutines = await getRoutinesByActivity({ id });

    setRoutines(activityRoutines);
  };
  useEffect(() => {
    getRoutines();
  }, [id]);

  return (
    <div>
      <Routines
        routines={routines}
        user={user}
        token={token}
        callback={getRoutines}
      />
    </div>
  );
};

export default SingleActivityRoutines;
