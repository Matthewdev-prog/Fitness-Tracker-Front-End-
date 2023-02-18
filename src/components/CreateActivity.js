import React, {useState} from 'react'
import { createNewActivity } from '../api'

const CreateActivity = () => {
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = async ev => {
    ev.preventDefault();
    const newActivity = await createNewActivity({name, description, token})
  }

  return (
    <div>
      <div >
      {/* <div>{errorMessage}</div> */}
      <form className="formContainer" onSubmit={ev => handleSubmit(ev)}>
        <div className="formdiv">
          <label>Activity name</label>
          <input placeholder="enter name here..." value={name} onChange={ev => setName(ev.target.value)}/>
        </div>
        <div className="formdiv">
          <label>Describe what the activity is</label>
          <input placeholder="enter description here..." value={description} onChange={ev => setDescription(ev.target.value)}/>
        </div>
        <input className="btn" type="submit" value="Create new activity" />
      </form>
    </div>
    </div>
  )
}

export default CreateActivity;
