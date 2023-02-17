import React, { useState, useEffect } from "react";
import { fetchPublicRoutines } from "../api";
import { Link } from "react-router-dom";
import { Routines } from ".";
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
        <Routines routines={publicRoutines} />
      </div>
    </div>
  );
};

export default AllRoutines;
