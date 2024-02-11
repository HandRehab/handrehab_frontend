import React from "react";
import { Link } from 'react-router-dom';
import './SideBar.css'


function SideBar() {
    const logout = () => {
      sessionStorage.clear()
    }
    return (
      <div>
        <div className="sidebar">
          <div className="d1">
            <Link to="/myprofile" className="details">
              My Profile
            </Link>
          </div>
  
          <div className="d2">
            <Link to="" className="details">
              Assessment
            </Link>
          </div>
          <div className="d3">
            <Link to="" className="details">
              Rehabilitation
            </Link>
          </div>
          <div className="d4">
            <Link to="" className="details">
              Score analysis
            </Link>

          </div>
          <div className="d5">
            <Link to="" className="details">
              Feedback
            </Link>

          </div>
        
          <div>
            <button className="but">
              <Link to="/Login" id="but" onClick={logout}>
                Log Out
              </Link>
            </button>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default SideBar