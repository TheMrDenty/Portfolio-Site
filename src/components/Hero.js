import React from 'react'
import { useGlobalContext } from '../context'
import headshot from '../images/headshot.jpg';

function Hero() {
    const {closeSubmenu} = useGlobalContext();

    const current = new Date();
   
    const learningYears = current.getFullYear() - 2022
    
    return (
    <section className='hero' onMouseOver={closeSubmenu}>
        <div className='hero-center'>
            <article className='hero-info'>
              <img src={headshot} className='hero-img' alt='picture of jamie' />

              <div className='hero-text'>
                <h1 className='highlight'>Hi, I'm<br />Jamie Taber-Plaisted </h1>
                <p className='hero-text'>
                  A Junior Web-Developer with a strong understanding of Responsive Web Design & Object Oriented Programing.
                  I am currently learning as much as possible to continue strengthening my skills for my next role.
                  My goal as a developer is to bring my ideas to life and have fun while doing so, my focus is currently
                  on front-end development but in the future I would like to get into game development and machine learning.
                  I have always had a love for computers and have grown up playing through some of the greatest stories in video-games.
                  So it only felt natural to change careers to a field that would allow me to work with both and to potentially produce
                  a great story for others to experience.

                  <br />
                  <br />

                  I have always aimed to be the best at what I do and if me telling you isn't enough too convince you, my work history
                  should be. At 16 I started working as a host at a restaurant and eventually worked my way up to serving where I frequently
                  was a top 3 performer in multiple sales categories. Then, in my two years as a Real Estate Agent, I handled north of 2 million dollars
                  in sales. I am on year {learningYears} of learning how to code and have been keeping impressive pace picking up the concepts and 
                  have built myself a solid foundation to continue growing as a developer.

                  <br />
                  <br />

                  Outside of work and learning you will usually catch me either playing a game, binge-watching one of my favorite shows, 
                  or spending some time with my friends & family. 
                  
                  <br />
                  <br />

                  If a hard-working, dedicated, team-oriented developer sounds like a great fit for your team then <a href='#contactMe' className='highlight'>contact me!</a>

                </p>
              </div>
            </article>
            
        </div>
    </section>
  )
}

export default Hero