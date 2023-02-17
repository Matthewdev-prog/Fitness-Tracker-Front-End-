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
  <div className="container2">
  <div>

     <h1>Activities</h1>
     <div className="activityCard">
    {AllActivities.length
      ? AllActivities.map((activity) => {
          const { id, name, description } = activity;
          return (
            <div className="card">
            <div key={id}>
              <div>Name: {name}</div>
              <div>Description: {description}</div>
            </div>
            </div>
          );
        })
      : null}
      </div>
  </div>
   <div>
   <img className="imagediv" src="../../assets/files/Frame-4.png" alt="woman dong yoga" />
 </div>
 </div>
);
};

export default Activities;

