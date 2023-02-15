import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter} from "react-router-dom"
import {
  Home,
  Nav,
} from "./components"

// import { fetchPublicRoutines, fetchAllActivities } from './api/index';




const App = ()=> {
  useEffect(() => {
  }, [])
  return (
    <div>
      <h1>Fitness Trc.kr</h1>
      <Nav />
      <Routes>
        <Route exact path="/" 
          element={
            <Home />
          }
        />
      </Routes>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);
