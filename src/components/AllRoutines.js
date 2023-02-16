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
      <h1>Routines</h1>
      <div className = "routines">
      
      {publicRoutines.length
        ? publicRoutines.map((routine) => {
            const { id, name, creatorName, goal } = routine;
            return (
              <div key={id}>
               <ul> <li>{name}</li> </ul>
                <div className ="hidden" >goal of routine: {goal}</div>
                <div className = "hidden" >by : {creatorName}</div>
            </div>
            );
            })
        : null}
    </div>
    </div>
  );
};



export default AllRoutines;
