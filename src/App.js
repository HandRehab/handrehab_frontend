import React from 'react';
import "./index.css";
import './App.css';
import Login from './routes/Login';
import Home from './routes/Home';
import {Route,Routes} from "react-router-dom"
import About from './components/About/About';
import Navbar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import Assessment from './routes/Assessment';
import Rehabilitation from './routes/Rehabilitation'

/*
import BackButton from './components/back_button';
*/
function App() {
  return (
    <>
    
     
    <Routes>
    {/* Login Route <BackButton></BackButton>  */}
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Home" element={<Home/>}/>
    
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Assessment" element={<Assessment/>}/>
    <Route path="/Rehabilitation" element={<Rehabilitation/>}/>
    </Routes>
    </>
    
  );
}

export default App;
