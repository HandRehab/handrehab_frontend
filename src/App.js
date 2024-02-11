import React from 'react';
import "./index.css";
import './App.css';
import Login from './routes/Login';
import Home from './routes/Home';
import {Route,Routes} from "react-router-dom"
import About from './components/About/About';
import Navbar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';

/*
import BackButton from './components/back_button';
*/
function App() {
  return (
    <>
    
     
    <Routes>
    {/* Login Route <BackButton></BackButton>  */}
    <Route path="/" element={<Home/>}/>
    {/*<Route path="/Login" element={<Login/>}/>*/}
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    
    
    </Routes>
    </>
    
  );
}

export default App;
