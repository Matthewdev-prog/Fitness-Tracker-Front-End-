import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Routines, MyRoutines } from ".";
import { getUsersPublicRoutines } from "../api";


const myRoutines = (props) => {
  const { token, setToken } = props;
  const nav = useNavigate();
  const [myRoutines, setmyRoutines] = useState([]);

  const handleCreate = async (ev) => {
    ev.preventDefault();
    const create = await createUserRoutine({ username, password });
    if (create.error) {
      setCreateIssue(create.message);
      return;
    }
    const { token } = create;
    window.localStorage.setItem("token", token);
    setToken(token);
    nav("/routines/myroutines");
  };


  useEffect(() => {

    const loadmyRoutines = async () => {
      const routines = await getUsersPublicRoutines();
      setmyRoutines(routines);
    };
    loadmyRoutines();
  }, []);
  console.log(myRoutines);
  return (
   <div className="container1">

  <div>
  <h1 className="login">My Routines for ...</h1>
  <p>Add your new routines here.</p>
  </div>



  <div>
    <form className="formContainer" action="/">
        <div className="formdiv">
      <label for="Uname">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name..."/>
        </div>
        <div className="formdiv">
      <label for="password">Goal</label>
      <input type="text" id="goal" name="goal" placeholder="Your goal..."/>
         </div>
      <input className="btn" type="submit" value="Create"/>
      <p class="smalltext">Already have an account? <a href="index.html">Login</a></p>
    </form>
  </div>


      <div>
      <h1>My Routines</h1>
      </div>
      <div className="routines">
        <MyRoutines routines={myRoutines} />
      </div>


    </div>
  


  );
};




export default myRoutines;
