import './styles.scss';

import React from 'react'
import Navbar from '../Navbar/index';
import NavModal from '../NavModal/index';

import Submenu from '../Submenu/index';
import { Outlet } from 'react-router-dom';







function Layout() {
  return (
    <div className='container'>

      <Navbar /> 
      <NavModal />
      <Submenu />
      
      <Outlet />
      
    </div>
   
  )
}

export default Layout