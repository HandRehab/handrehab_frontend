import React from 'react'
import Navbar from '../components/NavBar/NavBar'
import SideBar from '../components/Home/SideBar/SideBar'
import WorkRehab from '../components/Cards/WorkRehab'
import './Rehabilitation.css'

function Rehabilitaion() {
    return (
        <>
         <div>
                <Navbar/>
                <div className='rehabilitation-flex'>
                <SideBar/>
                <WorkRehab/>
                
                </div>
                
                
            </div>
        </>
           
      )
}

export default Rehabilitaion
