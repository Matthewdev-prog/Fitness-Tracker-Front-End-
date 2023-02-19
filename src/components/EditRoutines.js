import React, {useState} from 'react'
import { editRoutine } from '../api';

const EditRoutines = (props) => {
  const {routineId, name, goal, token, setEdit, callback} = props;
  console.log(callback)
  const [editName, setEditName] = useState(name);
  const [editGoal, setEditGoal] = useState(goal);
  const [isPublic, setIsPublic] = useState(false);
  const handleSubmit = async ev => {
    ev.preventDefault();
    const newRoutine = await editRoutine({ routineId, name: editName, goal: editGoal, isPublic, token })
    console.log(newRoutine);
    setEdit(false);
    callback()
  }
  console.log(isPublic)
  return (
    <div className='edit'>
      <form onSubmit={ev => handleSubmit(ev)}>
        <div>
          <input className='edit-input' value={editName} onChange={ev => setEditName(ev.target.value)} />
        </div>
        <div>
          <input className="edit-input" value={editGoal} onChange={ev => setEditGoal(ev.target.value)} />
        </div>
        <div className='checkBoxDiv'>
          <label>Is this a public routine</label>
          <input className='checkbox' type='checkbox' value={isPublic} onChange={ev => setIsPublic(!isPublic)}/>
        </div>
        <div>
        <input className="btn" type="submit" value="Submit edit" />
        </div>
      </form>
    </div>
  )
}

export default EditRoutines;
