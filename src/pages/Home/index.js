import './styles.scss';

import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context'
import headshot from '../../images/headshot.jpg';
import AnimatedLetters from '../../components/AnimatedLetters';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';

function Home() {

  const [letterClass, setLetterClass] = useState('text-animate')
  const welcomeArray = ['H', 'e', 'l', 'l', 'o,', ' ', "I'", 'm']
  const nameArray = ['J', 'a', 'm', 'i', 'e', ' ', 'T', 'a', 'b', 'e', 'r', '-', 'P', 'l', 'a', 'i', 's', 't', 'e', 'd']
  const contactArray = ['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e!']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const {closeSubmenu} = useGlobalContext();

  
  
  return (
    <div className='home-page'>
      <div className='content'>
        
          <section className='hero' >
              <div className='hero-center'>
                  <article className='hero-info'>
                    <img src={headshot} className='hero-img' alt='jamie' />

                    <div className=''>
                      <h1 className='highlight'>
                        <AnimatedLetters letterClass={letterClass} strArray={welcomeArray} idx={1} />
                        <br /> 
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={9} />
                      </h1>
                      <p className='hero-text'>
                        As a Junior Web Developer, I possess a comprehensive understanding of Responsive Web Design and Object Oriented Programming. 
                        I am constantly striving to improve my skills and take on new challenges, with a focus on front-end development. 
                        However, my ultimate goal is to delve into game development and machine learning,  
                        as I have a passion for both computer technology and video-games, and aim to bring my creative ideas to life through my work.

                        <br />
                        <br />

                        Throughout my career, I have consistently demonstrated my drive for excellence and determination. My work experience, 
                        starting from my role as a restaurant host, where I eventually became a top-performing server, to my two years as a Real Estate Agent, 
                        handling over 2 million dollars in sales, showcases my dedication and ability to succeed. Now, in my first year of learning to code, 
                        I have made impressive progress and established a solid foundation that will continue to support my growth as a developer.

                        <br />
                        <br />

                        When I am not working or learning, I enjoy spending time with my friends and family, playing games, or binge-watching my favorite shows.
                        
                        <br />
                        <br />

                        If you are seeking a hard-working, motivated, and team-oriented developer to join your team, 
                        I would love the opportunity to discuss how I can contribute to your organization's success.
                        <NavLink exact='true' to={'/contact'} className='highlight contact-me'>
                          <AnimatedLetters letterClass={letterClass} strArray={contactArray} idx={25} />
                        </NavLink>

                      </p>
                    </div>
                  </article>
                  
              </div>
          </section>
        
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Home