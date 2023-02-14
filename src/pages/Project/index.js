import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import Footer from '../../components/Footer'
import { useGlobalContext } from '../../context';
import './styles.scss'

function Project(props) {
  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);
  
  return (
    <>
        <div className='project-container'>
            <img src={propsData.img} alt={propsData.name} />
        </div>
    </>
  )
}

export default Project