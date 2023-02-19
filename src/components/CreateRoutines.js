import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { postNewRoutine } from "../api";

const CreateRoutines = (props) => {
  const { token, getRoutines } = props;
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const newRoutine = await postNewRoutine({ name, goal, isPublic, token });
    if (newRoutine.error) {
      setErrorMessage(newRoutine.message);
      return;
    }
    setName("");
    setGoal("");
    if (!pathname === "/routines/myroutines") {
      console.log("move");
      nav("/routines/myroutines");
      return;
    }
    await getRoutines();
    setErrorMessage("You're routine has been added!");
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };

  return (
    <div className="loginContainer">
      <h1>Create a routine, follow it, shred the calories away!</h1>
      <div>{errorMessage}</div>
      <form className="formContainer" onSubmit={(ev) => handleSubmit(ev)}>
        <div className="formdiv">
          <label>Routine name</label>
          <input
            placeholder="enter name here..."
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <div className="formdiv">
          <label>What is your goal?</label>
          <input
            placeholder="enter goal here..."
            value={goal}
            onChange={(ev) => setGoal(ev.target.value)}
          />
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
