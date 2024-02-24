import React from 'react';
import './ViewProfile.css';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../../Home/SideBar/SideBarAdmin';

const ViewProfile = () => {
  return (
    
      <div className="container">
        <div className="rectangular-layout">
          <div>
            <div className="name">Name 1</div>
            <div className="email">abc1@example.com</div>
          </div>
          <div>
            <button className="btn">View Scores</button>
            <button className="btn">Give Feedback</button>
          </div>
        </div>
        <div className="rectangular-layout">
          <div>
            <div className="name">Name 2</div>
            <div className="email">abc2@example.com</div>
          </div>
          <div>
            <button className="btn">View Scores</button>
            <button className="btn">Give Feedback</button>
          </div>
        </div>
        <div className="rectangular-layout">
          <div>
            <div className="name">Name 3</div>
            <div className="email">abc3@example.com</div>
          </div>
          <div>
            <button className="btn">View Scores</button>
            <button className="btn">Give Feedback</button>
          </div>
        </div>
      </div>
    
  );
}

export default ViewProfile;
