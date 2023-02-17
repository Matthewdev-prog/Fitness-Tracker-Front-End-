import React, { useState } from "react";
import { postNewRoutine } from "../api";

const CreateRoutines = (props) => {
  const {token} = props
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = async(ev) => {
    ev.preventDefault();
    console.log("goal!!", goal)
    console.log(name,"name!!")
    const newRoutine = await postNewRoutine({name, goal, isPublic, token});
    console.log("NEW",newRoutine)
  }

  return (
    <div className="loginContainer">
      <h1>Ceate a routine, follow it, shred the calories away!</h1>
      <form className="formContainer" onSubmit={ev => handleSubmit(ev)}>
        <div className="formdiv">
          <label>Routine name</label>
          <input placeholder="enter name here..." value={name} onChange={ev => setName(ev.target.value)}/>
        </div>
        <div className="formdiv">
          <label>What is your goal?</label>
          <input placeholder="enter goal here..." value={goal} onChange={ev => setGoal(ev.target.value)}/>
        </div>
        <div className="checkBoxDiv">
          <label>Do you want others to see your routine?</label>
          <input
            type="checkbox"
            className="checkbox"
            value={isPublic}
            onChange={(_) => setIsPublic(!isPublic)}
          />
        </div>
        <input className="btn" type="submit" value="Create new routine" />
      </form>
    </div>
  );
};

export default CreateRoutines;
