import React from 'react';
import './SendMessage.css';
import Navbar from '../components/NavBar/NavBar';
import SideBar from '../components/Home/SideBar/SideBarAdmin';


function SendMessage() {
  return (
    
      <div className="containerMessage">
        <h2 className="messagehead">Send Feedback</h2>
        <div className="form-groupMessage">
          <label htmlFor="message" className="label">
            Message:
          </label>
          <textarea
            id="message"
            className="textarea"
            rows={4}
            cols={80}
          />
        </div>
        <button className="messagebutton">
          Send Message
        </button>
      </div>
    
  );
}

export default SendMessage;