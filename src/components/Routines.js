import React from "react";
import { Link } from "react-router-dom";

const Routines = (props) => {
  const { routines, user } = props;
  return (
    <div>
      {routines.length
        ? routines.slice(0).reverse().map((routine) => {
            const { id, name, creatorName, goal, activities } = routine;
            return (
              <li className="routine" key={id}>
                  {" "}
                  {name}{" "}
                <div>goal of routine: {goal}</div>
                <div>
                  by :{" "}
                  <Link className="routines-links" to={`/routines/${creatorName}`}>{creatorName}</Link>
                </div>
                <div>
                  <br />
                  <span>Routine Activities:</span>
                  {activities.length ? (
                    activities.map((activity) => {
                      const { id, count, duration, name, description } =
                        activity;
                      return (
                        <div className="routine-activities" key={id}>
                          <span><Link className="routines-links" to={`/routines/activity/${id}`}>{name}</Link>: </span>
                          <span><br/>description: <br /> {description} </span>
                          <span> count: {count} </span>
                          <span> duration: {duration} </span>
                        </div>
                      );
                    })
                  ) : (
                    <div className="routine-activities"> No activities for this routine... yet! </div>
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
