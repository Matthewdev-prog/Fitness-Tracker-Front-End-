import React, {useState} from 'react'
import { editActivity } from '../api';

const EditActivity = (props) => {
  const {name, description, token, id, callback, setEdit} = props;
  const [editName, setEditName] = useState(name);
  const [editDescription, setEditDescription] = useState(description);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const edit = await editActivity({ id, token, name: editName, description: editDescription })
    console.log(edit)
    if(edit.error){
      setErrorMessage(edit.message);
      return;
    }
    setEditDescription("");
    setEditName("");
    setEdit(false);
    callback();
  }

  return (
    <div>
        <div>Edit Activity</div>
        <div>{errorMessage}</div>
      <form onSubmit={ev => handleSubmit(ev)}>
        <label>Name</label>
        <div className='edit'>
          <input className='edit-input' value={editName} onChange={ev => setEditName(ev.target.value)}/>
        </div>
        <label>Description</label>
        <div className='edit'>
          <input className='edit-input' value={editDescription} onChange={ev => setEditDescription(ev.target.value)}/>
        </div>
        <input className="btn" type="submit" value="Submit edit" />
      </form>
    </div>
  )
}

export default EditActivity;
