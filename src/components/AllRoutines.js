import React, { useState, useEffect } from "react";
import { fetchPublicRoutines } from "../api";
import { Link } from "react-router-dom";
import { Routines } from ".";
const AllRoutines = (props) => {
  const { token, user } = props;
  const [publicRoutines, setPublicRoutines] = useState([]);

  const loadRoutines = async () => {
    const routines = await fetchPublicRoutines();
    setPublicRoutines(routines);
  };

  useEffect(() => {
    loadRoutines();
  }, []);

  return (
    <div>
      <h1>Routines</h1>
      <ul className="routines">
        <Routines
          routines={publicRoutines}
          user={user}
          token={token}
          callback={loadRoutines}
        />
      </ul>
    </div>
  );
};

export default AllRoutines;
