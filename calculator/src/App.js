import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import Keypad from './Keypad';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from "react";


function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
           <Route exact path ="/" element={<Calculator/>}>
             Calculator
           </Route>
           <Route exact path ="/" element={<Keypad/>}>
             Keypad
           </Route>

         </Routes>
       </Router>
    </div>
  );
};

export default App;
