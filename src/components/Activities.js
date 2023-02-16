import React, { useState, useEffect } from "react";
import { fetchAllActivities } from "../api";

const Activities = () => {
  const [AllActivities, setAllActivities] = useState([]);

  useEffect(() => {
    const loadActivities = async () => {
      const activities = await fetchAllActivities();
      setAllActivities(activities);
    };
    loadActivities();
  }, []);
 //   console.log(AllActivities)

 return (
  <div>
    {AllActivities.length
      ? AllActivities.map((activity) => {
          const { id, name, description } = activity;
          return (
            <div key={id}>
              <div>name: {name}</div>
              <div>description: {description}</div>
            </div>
          );
        })
      : null}
  </div>
);
};

export default Activities;
