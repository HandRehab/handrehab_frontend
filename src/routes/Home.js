import React from 'react'
import Login from './Login';

function Home(){
  return(
     true? <Login /> : dashboardSelect()
  );

  function dashboardSelect() {
      
         const userType = 1;
         console.log(userType);
         /*
         if (userType === "1") {
         return <Admin />
         } else if (userType === "2") {
           return <Doctor />
         } else if (userType === "3") {
           return <Parent />
         }
         */
      
  }
}

export default Home