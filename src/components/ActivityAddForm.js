import React, { useState, useEffect } from "react";
import { addActivityToRoutine, fetchAllActivities } from "../api";

const ActivityAddForm = (props) => {
  const { token, routineId, callback, setAddActivity } = props;
  const [activities, setActivities] = useState([]);
  const [activityId, setActivityId] = useState(null);
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getActivities = async () => {
    const acti = await fetchAllActivities();
    setActivities(acti);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const addedActivity = await addActivityToRoutine({
      token,
      routineId,
      activityId,
      count,
      duration,
    });
    if (addedActivity.error) {
      setErrorMessage(addedActivity.message);
      return;
    }
    setErrorMessage("");
    setActivityId(null);
    setCount("");
    setDuration("");
    setAddActivity(false);
    callback();
  };
  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div>
      FORM
      <div>{errorMessage}</div>
      <form className="edit" onSubmit={(ev) => handleSubmit(ev)}>
        <label>how many reps?</label>
        <div>
          <input
            className="edit-input"
            value={count}
            onChange={(ev) => setCount(ev.target.value)}
            placeholder="count..."
          />
        </div>
        <label>for how long?</label>
        <div>
          <input
            className="edit-input"
            value={duration}
            onChange={(ev) => setDuration(ev.target.value)}
            placeholder="duration..."
          />
        </div>
        <div className="select-container">
          <select onChange={(ev) => setActivityId(ev.target.value)}>
            <option value={null}>Select an activity...</option>
            {activities.length ? (
              <>
                {activities.map(({ name, id }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </>
            ) : null}
          </select>
        </div>
        <div>
          <input className="btn" type="submit" value="Add adtivty" />
        </div>
      </form>
    </div>
  );
};

export default ActivityAddForm;
