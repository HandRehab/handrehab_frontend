import React from 'react'
import { useState, useEffect } from "react";


import SideBar from '../components/Home/SideBar/SideBar';
import Navbar from '../components/NavBar/NavBar';
import PreLoader from '../components/PreLoader/PreLoader';


function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ?
      (<PreLoader />) 
      :
      (<>
          
          <Navbar/>
          <SideBar/>
        </>
      )}
    </div>
  );
}

export default Home

