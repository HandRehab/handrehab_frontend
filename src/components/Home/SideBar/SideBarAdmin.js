import React from 'react';
import 'boxicons';
import './SideBarAdmin.css' 

const SideBar = () => {
  return (
    <div className="sidebar close">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <ul className="nav-links">
        <li>
          <div className="iocn-link">
            <a href="/ViewPatientProfile">
            <i class='bx bx-user-pin'></i>
              <span className="link_name">View Patient Profile</span>
            </a>
          </div>
          <ul className="sub-menu">
            <li><a className="link_name" href="/ViewPatientProfile">View Patient Profile</a></li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="/Userform"><i class='bx bx-user-plus'></i></a>
          </div>
          <ul className="sub-menu">
            <li><a className="link_name" href="#">Add User</a></li>
          </ul>
        </li>

        <li>
          <a href="/GiveFeedback">
            <i class='bx bx-chart'></i>
            <span className="link_name">Give Feedback</span>
          </a>
          <ul className="sub-menu blank">
            <li><a className="link_name" href="/GiveFeedback">Patient Analysis</a></li>
          </ul>
        </li>

        <li>
          <a href="/Login">
            <i className='bx bx-log-out'></i>
            <span className="link_name">Log Out</span>
          </a>
          <ul className="sub-menu blank">
            <li><a className="link_name" href="/Logout">Log Out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
