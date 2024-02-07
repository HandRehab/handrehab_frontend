import React from 'react'

import './LoginStyles.css'
const LoginPage = () => {
  return (
    <div class="content">
         <div class="text">
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
  )
}

export default LoginPage