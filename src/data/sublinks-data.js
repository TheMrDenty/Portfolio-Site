import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import JamieTaberPlaistedResume from '../data/JamieTaberPlaistedResume.pdf'

const sublinks = [
  {
    page: [
      'about', 
      '/about'
    ],
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
      { label: 'connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: [
      'projects', '/projects',
    ],
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: [
      'contact', '/contact',
    ],
    links: [
      { label: 'email me', icon: <FontAwesomeIcon icon={faUser} />, url: '/contact' },
      { label: <a href={JamieTaberPlaistedResume} download className='resume' > my resume</a>, icon: <FaBriefcase />, url: '/contact' },
    ],
  },
];



export default sublinks;

