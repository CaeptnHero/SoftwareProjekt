import React from 'react';
import './App.css';
import Home from './Home';
import FrontAndBack from './FrontAndBack';
import Learn from './Learn';
import Stacks from './Stacks';
import Login from './LoginPage';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

// More Imports per new Js Data

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/frontandback" element={<FrontAndBack />} />
          <Route exact path="/learn" element={<Learn />} />
          <Route exact path="/stacks" element={<Stacks />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;