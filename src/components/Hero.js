import React from 'react'
import { useGlobalContext } from '../context'
import forestImg from '../images/forest.jpg'

function Hero() {
    const {closeSubmenu} = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
        <div className='hero-center'>
            <article className='hero-info'>
                <div className='hero-name'><h1>Hi, I'm </h1><br/> <h1 className='highlight'>Jamie</h1></div>
                
                {/* <img src={forestImg} className='forest-img' alt='forest' /> */}
                
                
                <div className='hero-text'><h1 className='highlight'>Web Developer,</h1> <br/> <h1> specializing in react</h1></div>
                
                
            </article>
            
        </div>
    </section>
  )
}

export default Hero