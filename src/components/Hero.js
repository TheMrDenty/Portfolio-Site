import React from 'react'
import { useGlobalContext } from '../context'
import forestImg from '../images/forest.jpg'

function Hero() {
    const {closeSubmenu} = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
        <div className='hero-center'>
            <article className='hero-info'>
                <h1 className='hero-name'>Hi, I'm <br/> <h1 className='name'>Jamie</h1></h1>
                
                <img src={forestImg} className='forest-img' alt='forest' />
                
                
                <p className='hero-text'>Web Developer, <br/>  specializing in react</p>
                
                
            </article>
            
        </div>
    </section>
  )
}

export default Hero