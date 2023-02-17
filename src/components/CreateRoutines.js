import React, { useState } from 'react'
import { postNewRoutine } from '../api';


const CreateRoutines = () => {
  const [name, setName] = useState("")
  const [goal, setGoal] = useState("")
  const [isPublic, setIsPublic] = useState(false);


  return (
    <div >
      <form className='loginContainer'>
        <input placeholder='enter name here...'/>
        <input placeholder='enter goal here...'/>
        <input className="btn" type="submit" value="Create new routine" />
      </form>
    </div>
  )
}

export default CreateRoutines;
