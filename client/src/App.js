import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/home'
import User from './components/Login/UserLogin/UserLogin'
import './App.css';

function App() {

   return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/User' element={<User/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
