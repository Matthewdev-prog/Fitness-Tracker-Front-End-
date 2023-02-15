import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { fetchPublicRoutines, fetchAllActivities } from './api/index';




const App = ()=> {
  useEffect(() => {
    fetchAllActivities();
  }, [])
  return (
    <div>
      <h1>Front End</h1>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
