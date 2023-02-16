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
  <div class="container2">
  <div>

     <h1>Activities</h1>
     <div className="routines">
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
  </div>
   <div>
   <img class="imagediv" src="../../assets/files/Frame-4.png" alt="woman dong yoga" />
 </div>
 </div>
);
};

export default Activities;

