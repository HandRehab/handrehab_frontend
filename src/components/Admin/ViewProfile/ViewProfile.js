import React from 'react';
import './ViewProfile.css';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../../Home/SideBar/SideBarAdmin';


const ViewProfile = () => {
  return (
    <div>
      <NavBar />
      <SideBar />
      <div className="container">
        <div className="rectangular-layout">
          <div className="name">Profile 1</div>
          <div>
            <button className="btn">View Scores</button>
            <button className="btn">Give Feedback</button>
          </div>
        </div>
        <div className="rectangular-layout">
          <div className="name">Profile 2</div>
          <div>
            <button className="btn">View Scores</button>
            <button className="btn">Give Feedback</button>
          </div>
        </div>
        <div className="rectangular-layout">
          <div className="name">Profile 3</div>
          <div>
            <button className="btn">View Scores</button>
            <button className="btn">Give Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
