import './styles.scss';

import React from 'react'
import Navbar from '../Navbar/index';
import Modal from '../Modal/index';

import Submenu from '../Submenu/index';
import { Outlet } from 'react-router-dom';







function Layout() {
  return (
    <div className='container'>

      <Navbar /> 
      <Modal />
      <Submenu />
      
      <Outlet />
      
    </div>
   
  )
}

export default Layout