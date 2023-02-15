import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import JamieTaberPlaistedResume from '../data/JamieTaberPlaistedResume.pdf'

const sublinks = [
  {
    page: [
      'about', 
      '/about'
    ],
    links: [
      { label: 'bio', icon: <FaCreditCard />, url: '/about#bio' },
      { label: 'skills', icon: <FaCreditCard />, url: '/about#skills' },
      { label: 'at home', icon: <FaCreditCard />, url: '/about#home' },
    ],
  },
  {
    page: [
      'projects', '/projects',
    ],
    links: [
      { label: 'project list', icon: <FaBook />, url: '/projects#projects' },
      { label: 'commit history', icon: <FaBook />, url: '/projects#github' },
      { label: 'site code', icon: <FaBook />, url: 'https://github.com/TheMrDenty/Portfolio-Site' },
      { label: 'joke', icon: <FaBook />, url: '/projects#joke' },
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

