import React from 'react';
import './LoginStyles.css';

const LoginPage = () => {
  return (
    <div className="login-bg"> {/* Apply the specific class to the body element */}
      <div className="content">
        <div className="text">
          Login Form
        </div>
         <form action="#">
            <div class="field">
               <input type="text" required/>
               <span class="fas fa-user"></span>
               <label>Username</label>
            </div>
            <div class="field">
               <input type="password" required/>
               <span class="fas fa-lock"></span>
               <label>Password</label>
            </div>
            <div class="forgot-pass">
               <a href="#">Forgot Password?</a>
            </div>
            <button >Sign in</button>
            <div class="sign-up">
               Not a member?
               <a href="#">signup now</a>
            </div>
         </form>
      </div>
      </div>
    
  )
}

export default LoginPage