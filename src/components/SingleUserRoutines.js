import React, { useEffect, useState } from "react";
import { getUsersPublicRoutines } from "../api";
import { useLocation } from "react-router-dom";

const SingleUserRoutines = () => {
  const [userRoutines, setUserRoutines] = useState([]);

  const location = useLocation();
  const pathName = location.pathname;
  const path = pathName.split("/");
  const username = pathName.split("/")[path.length - 1];
  useEffect(() => {
    const getRoutines = async () => {
      const routines = await getUsersPublicRoutines({ username });
      setUserRoutines(routines);
    };
    getRoutines();
  }, []);

  console.log(userRoutines);
  return (
    <div>
      {userRoutines.length
        ? userRoutines.map((routine) => {
            const { id, name, creatorName, goal, activities } = routine;
            console.log(id);
            return (
              <div key={id}>
                <ul>
                  {" "}
                  <li>{name}</li>{" "}
                </ul>
                <div>goal of routine: {goal}</div>
                <div>by :{creatorName}</div>
                <div>
                  {activities.length ? (
                    activities.map((activity) => {
                      console.log(activity);
                      const { id, count, duration, name, description } =
                        activity;
                      return (
                        <div key={id}>
                          <div>{name}</div>
                          <div>{description}</div>
                          <div>{count}</div>
                          <div>{duration}</div>
                        </div>
                      );
                    })
                  ) : (
                    <div> No activities for this routine </div>
                  )}{" "}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default SingleUserRoutines;
