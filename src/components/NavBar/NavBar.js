import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    const[color,setColor] = useState(false);
    const changeColor =()=>{
      if(window.scrollY >=100){
        setColor(true);
      }
      else{
        setColor(false);
      }
    };
    window.addEventListener("scroll",changeColor);

    return(
        <div className={color?"header header-bg":"header"}>
      <Link to="/Home">
<<<<<<< HEAD
        <h1 className="head">HandRehab</h1>
=======
        <h1>HandRehab</h1>
>>>>>>> d1869c6533a70d181c4c11bed09a17b013abb38b
      </Link>
        <ul className={click? "nav-menu active":"nav-menu"}>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
          
          
<<<<<<< HEAD
        </ul>       
         <div className="hamburger" onClick={handleClick}>
          {click ?(<FaTimes size={20} style={{ color: "#fff" }} />)
            :(<FaBars size={20} style={{ color: "#fff" }} />)}
            
=======
        </ul>        
        <div className="hamburger" onClick={handleClick}>
          {click ?(<FaTimes size={20} style={{ color: "#000" }} />)
            :(<FaBars size={20} style={{ color: "#000" }} />)}
>>>>>>> d1869c6533a70d181c4c11bed09a17b013abb38b
          
          
        </div>
    </div>
    );
};


export default Navbar;