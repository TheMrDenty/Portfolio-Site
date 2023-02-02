import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Submenu from '../components/Submenu'

function Homepage() {
  return (
    <>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
    </>
  )
}

export default Homepage