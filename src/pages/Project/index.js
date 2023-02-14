import React from 'react'
import {useLocation} from 'react-router-dom';
import Footer from '../../components/Footer'

import './styles.scss'

function Project() {
  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);
  
  return (
    <>
        <div className='project-container'>
            <img src={propsData.img} alt={propsData.name} />
        </div>
        <Footer />
    </>
  )
}

export default Project