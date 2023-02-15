import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
import Footer from '../../components/Footer'
import AnimatedLetters from '../../components/AnimatedLetters';

import './styles.scss'

function Project() {
  // brings in props
  const location = useLocation();
  const propsData = location.state;
  const {name, img, why, learned, nextTime} = propsData;
  
  // for animated letters
  const [letterClass, setLetterClass] = useState('text-animate')

  const whyArray = ['W', 'h', 'y', '?'];
  const learnedArray = ['W', 'h', 'a', 't', ' ', 'W', 'a', 's', ' ', 'L', 'e', 'a', 'r', 'n', 'e', 'd', '?'];
  const nextTimeArray = ['W', 'h', 'a', 't', ' ', 't', 'o', ' ', 'C', 'h', 'a', 'n', 'g', 'e', '?'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  
  return (
    <>
        <div className='project-container'>
            <h1 className='project-name highlight'>{name}</h1>
            
            <img src={img} alt={name} />

            <div className="project-section">
              <h1 className='highlight'>
                <AnimatedLetters letterClass={letterClass} strArray={whyArray} idx={1} />
              </h1>
              <p>{why}</p>
            </div>
 
            <div className="project-section">
              <h1 className='highlight'>
                <AnimatedLetters letterClass={letterClass} strArray={learnedArray} idx={3} />
              </h1>
              <ul>{learned.map((item, index) => {
                /* console.log(item.item, index); */
                return (
                  <li key={index}>{item.item}</li>
                )
              })}</ul>
            </div>

            <div className="project-section">
              <h1 className='highlight'>
                <AnimatedLetters letterClass={letterClass} strArray={nextTimeArray} idx={9} />
              </h1>
              <p>{nextTime}</p>
            </div>

        </div>

        <div className="footer">
            <Footer />
        </div>
    </>
  )
}

export default Project