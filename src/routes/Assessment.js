import React from 'react'
import Navbar from '../components/NavBar/NavBar'
import SideBar from '../components/Home/SideBar/SideBar'
import Work from '../components/Cards/Work'
import "./AssStyles.css"
const Assesment = () => {
  return (
    <>
     <div>
            <Navbar/>
            <div className='assessment-flex'>
            <SideBar/>
            <Work/>
            
            </div>
            
            
        </div>
    </>
       
  )
}

export default Assesment