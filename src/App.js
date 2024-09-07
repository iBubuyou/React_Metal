import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // เปลี่ยนจาก Switch เป็น Routes
import './App.css';

import Routing from './componant/routing.js';

const App = () => {
  return (
    <>
    <Routing />
    </>
  );
};

export default App;
