import React, { useState, useEffect } from "react";
import { fetchAllActivities } from "../api";
import CreateActivity from "./CreateActivity";

const Activities = (props) => {
  const {token} = props
  const [AllActivities, setAllActivities] = useState([]);

  const loadActivities = async () => {
    const activities = await fetchAllActivities();
    setAllActivities(activities);
  };
  useEffect(() => {
    loadActivities();
  }, []);
 //   console.log(AllActivities)

 return (
  <div className="container2">
  <div>

     <h1>Activities</h1>
     {token ? 
       <CreateActivity token={token} loadActivities={loadActivities}/>
      : null
     }
     <div className="activityCard">
    {AllActivities.length
      ? AllActivities.slice(0).reverse().map((activity) => {
          const { id, name, description } = activity;
          return (
            <div className="card" key={id}>
              <div>Name: {name}</div>
              <div>Description: {description}</div>
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

