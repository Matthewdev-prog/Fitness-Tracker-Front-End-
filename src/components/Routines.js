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
              <li className="routine" key={id}>
                  {" "}
                  {name}{" "}
                <div>goal of routine: {goal}</div>
                <div>
                  by :{" "}
                  <Link to={`/routines/${creatorName}`}>{creatorName}</Link>
                </div>
                <div>
                  <span>Routine Activities:</span>
                  {activities.length ? (
                    activities.map((activity) => {
                      console.log(activity);
                      const { id, count, duration, name, description } =
                        activity;
                      return (
                        <div className="routine-activities" key={id}>
                          <div>{name}: </div>
                          <span>description: {description} </span>
                          <span> count: {count} </span>
                          <span> duration: {duration} </span>
                        </div>
                      );
                    })
                  ) : (
                    <div> No activities for this routine </div>
                  )}{" "}
                </div>
              </li>
            );
          })
        : null}
    </div>
  );
};

export default Routines;
