import React from 'react';
import "./index.css";
import './App.css';
import Login from './components/Login';
import Home from './routes/Home';
import {Route,Routes} from "react-router-dom"
import SignUp from './components/SignUp';
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/Login" element={<Login/>}/>
      
    </Routes>
    </>
    
  );
}

export default App;
