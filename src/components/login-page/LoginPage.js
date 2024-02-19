import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStyles.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // For now, let's simulate a successful login and navigate to PatientHome
    // Replace the following line with your actual login logic
    // For example, you might want to call an authentication API
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      // Navigate to the PatientHome component
      navigate('/Home');
    }
  };

  return (
    <>
      <div className='nav-login'>
        <div className='heading'>
          <a href="#" className='head'>HANDREHAB</a>
        </div>
      </div>
      <div className='login'>
        <div className="content">
          <div className="text">
            Login Form
          </div>
          <form action="#">
            <div className="field">
              <input type="text" className="username" required/>
              <span className="fas fa-user"></span>
              <label>Username</label>
            </div>
            <div className="field">
              <input type="password" required/>
              <span className="fas fa-lock"></span>
              <label>Password</label>
            </div>
            <div className="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="button" onClick={handleLogin}>Sign in</button>
           
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
