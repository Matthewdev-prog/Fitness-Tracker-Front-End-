import React, { useState, useEffect } from "react";
import { fetchPublicRoutines } from "../api";

const AllRoutines = () => {
  const [publicRoutines, setPublicRoutines] = useState([]);

  useEffect(() => {
    const loadRoutines = async () => {
      const routines = await fetchPublicRoutines();
      setPublicRoutines(routines);
    };
    loadRoutines();
  }, []);
  //   console.log(publicRoutines)
  return (
    <div>
      {publicRoutines.length
        ? publicRoutines.map((routine) => {
            const { id, name, creatorName, goal } = routine;
            return (
              <div key={id}>
                <div>{name}</div>
                <div>goal of routine: {goal}</div>
                <div>by : {creatorName}</div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default AllRoutines;
