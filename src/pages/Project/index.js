import React from 'react'
import {useLocation} from 'react-router-dom';
import Footer from '../../components/Footer'

import './styles.scss'

function Project() {
  const location = useLocation();
  const propsData = location.state;
  const {name, img, why, learned, nextTime} = propsData;
  
  
  return (
    <>
        <div className='project-container'>
            <h1>{name}</h1>
            
            <img src={img} alt={name} />
            <p>{why}</p>
            <ul>{learned.map((item, index) => {
              console.log(item.item, index);
              return (
                <li>{item.item}</li>
              )
            })}</ul>
            <p>{nextTime}</p>
        </div>
        <Footer />
    </>
  )
}

export default Project