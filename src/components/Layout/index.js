import './styles.scss';

import React from 'react'
import Navbar from '../Navbar/index';
import Sidebar from '../Sidebar/index';

import Submenu from '../Submenu/index';
import { Outlet } from 'react-router-dom';




function Layout() {
  return (
    <div >
      <Navbar /> 
      <Sidebar />
      <Submenu />

      <Outlet />
    </div>
   
  )
}

export default Layout