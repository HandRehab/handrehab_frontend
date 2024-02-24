import React from 'react'
import Navbar from '../../NavBar/NavBar'
import SideBar from '../../Home/SideBar/SideBarAdmin'
import ViewProfile from '../ViewProfile/ViewProfile'

function AdminLoginPage() {
  return (
    <div>
      <Navbar/>
      <SideBar/>
      <ViewProfile/>
    </div>
  )
}

export default AdminLoginPage
