import React from 'react'
import './Userform.css'
import Navbar from '../../NavBar/NavBar';
import SideBar from '../../Home/SideBar/SideBarAdmin';

function Userform() {
    return (
       <div>
        <Navbar/>
        <SideBar/>
        <div className="back">
          <div className="formContainer">
            <h2 className="PersonalDetails">Personal Details</h2>
            <form >
              <div>
                <label className="aaa" htmlFor="username">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="Username"
                  
                />
              </div>
              <div>
                <label className="aaa" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="Password"
                 
                />
              </div>
              <div>
                <label className="aaa" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  
                />
              </div>
              <div>
                <label className="aaa" htmlFor="phoneNumber">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="Phone_Number"
                 
                />
              </div>
             
              
              <div className="formbutton">
                <button className="aaa" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          
        </div>
       </div>
        
      );
    }
    
    export default Userform;
