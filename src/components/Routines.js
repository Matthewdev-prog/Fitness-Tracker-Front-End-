import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EditRoutines } from ".";

const Routines = (props) => {
  const { routines, user } = props;
  const [edit, setEdit] = useState(false);
  const [addActivity, setAddActivity] = useState(false);
  const [routineId, setRoutineId] = useState(null);

  const handleEdit = (ev, id) => {
    setEdit(!edit);
    setAddActivity(false);
    setRoutineId(id);
  };

  return (
    <div>
      {routines.length
        ? routines
            .slice(0)
            .reverse()
            .map((routine) => {
              const { id, name, creatorName, goal, activities } = routine;
              return (
                <li className="routine" key={id}>
                  {" "}
                  {name} <div>goal of routine: {goal}</div>
                  <div>
                    by :{" "}
                    <Link
                      className="routines-links"
                      to={`/routines/${creatorName}`}
                    >
                      {creatorName}
                    </Link>
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
                            <span>
                              <Link
                                className="routines-links"
                                to={`/routines/activity/${id}`}
                              >
                                {name}
                              </Link>
                              :{" "}
                            </span>
                            <span>
                              <br />
                              description: <br /> {description}{" "}
                            </span>
                            <span> count: {count} </span>
                            <span> duration: {duration} </span>
                          </div>
                        );
                      })
                    ) : (
                      <div className="routine-activities">
                        {" "}
                        No activities for this routine... yet!{" "}
                      </div>
                    )}{" "}
                  </div>
                  {user ? (
                    <div>
                      {user.username === creatorName ? (
                        <>
                          <input
                            className="btn"
                            type="submit"
                            value="Add Activity"
                            onClick={(ev) => {
                              setAddActivity(!addActivity);
                              setEdit(false);
                            }}
                          />
                          <input
                            className="btn"
                            type="submit"
                            value="Edit"
                            onClick={(ev) => handleEdit(ev, routine.id)}
                          />
                          <input className="btn" type="submit" value="Delete" />
                          {edit && routineId === routine.id ? (
                            <EditRoutines />
                          ) : null}
                        </>
                      ) : null}
                    </div>
                  ) : null}
                </li>
              );
            })
        : null}
    </div>
  );
};

export default Routines;
