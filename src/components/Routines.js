import React from "react";
import { Link } from "react-router-dom";

const Routines = (props) => {
  const { routines } = props;
  return (
    <div>
      {routines.length
        ? routines.map((routine) => {
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
                          <div>{name}:</div>
                          <div>description: {description}</div>
                          <div>count: {count}</div>
                          <div>duration: {duration}</div>
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

export default Routines;
