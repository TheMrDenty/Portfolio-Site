import './styles.scss';

import React from 'react'
import Navbar from '../Navbar/index';
import Sidebar from '../Sidebar/index';
import Hero from '../Hero/index';
import Submenu from '../Submenu/index';




function Homepage() {
  return (
    <div className='home-container'>
      <Navbar /> 
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
   
  )
}

export default Homepage