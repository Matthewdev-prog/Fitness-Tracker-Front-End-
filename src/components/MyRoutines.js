import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const MyRoutines = () => {
  const nav = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if(!token){
    nav('/login')
    }
  }, [])
  return (
    <div>
        "MINE"
    </div>
  )
}

export default MyRoutines;
