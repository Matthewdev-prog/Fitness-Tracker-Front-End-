import React, { useState, useEffect } from "react";
import { fetchPublicRoutines } from "../api";
import { Link } from "react-router-dom";
const AllRoutines = () => {
  const [publicRoutines, setPublicRoutines] = useState([]);

  useEffect(() => {
    const loadRoutines = async () => {
      const routines = await fetchPublicRoutines();
      setPublicRoutines(routines);
    };
    loadRoutines();
  }, []);
  console.log(publicRoutines);
  return (
    <div>
      <h1>Routines</h1>
      <div className="routines">
        {publicRoutines.length
          ? publicRoutines.map((routine) => {
              const { id, name, creatorName, goal, activities } = routine;
              return (
                <div key={id}>
                  <ul>
                    {" "}
                    <li>{name}</li>{" "}
                  </ul>
                  <div>goal of routine: {goal}</div>
                  <div>
                    by :{" "}
                    <Link to={`/routines/${creatorName}`}>{creatorName}</Link>
                  </div>
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
    </div>
  );
};

export default AllRoutines;
