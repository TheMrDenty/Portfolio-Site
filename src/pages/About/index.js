import './styles.scss'
import AnimatedLetters from '../../components/AnimatedLetters'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/index';
import { NavLink } from 'react-router-dom';
import AboutCards from '../../components/AboutCards';




const About = () => {
    
    
    /* console.log(catFact) */
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const contactArray = ['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e!']
    

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    
    const current = new Date();
  
    const learningYears = current.getFullYear() - 2022
    
    
    
    

    return (
        <>        
            <div className='about-page'>

                <div id='bio' className="about">

                    <h1  className='highlight'> <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={1} /> </h1>

                    <p >
                        I am a Junior Web Developer with a passion for bringing my ideas to life through code. I have a strong understanding 
                        of Responsive Web Design and Object-Oriented Programming and I am always eager to continue learning and strengthening 
                        my skills. My focus is currently on front-end development, but I have a long-term goal of exploring game development 
                        and machine learning as well.

                        <br />
                        <br />

                        My journey into the world of coding started {learningYears} ago with my love for computers and video games. I have always been fascinated by the stories 
                        that can be told through interactive experiences and I saw web development as a way to bring my own stories to life. To that end, 
                        I have completed several programming courses, including the Per Scholas React Course Powered by TEKsystems, Nucamp's Complete 
                        Software Engineering Bootcamp, and Infosys's Java Intensive Program. Through these programs, I have gained expertise in 
                        technologies such as React, Redux, Java, SQL, Spring Boot, Postman, and more.

                        <br />
                        <br />

                        I have also gained valuable experience in various industries, including real estate and the hospitality sector. As a Real Estate 
                        Salesperson at Howard Hanna, I was responsible for helping clients navigate the real estate market and I was able to handle north 
                        of $2 Million in sales through purchases and sales of residential and commercial properties. As a server at Outback Steakhouse, 
                        I honed my communication skills and became a pro at balancing multiple tables while ensuring that each guest had a memorable experience.
                        
                        <br />
                        <br />

                        When I'm not coding or working, you can usually find me playing video games, binge-watching my favorite shows, or spending time with 
                        friends and family. I am a hard-working, dedicated, and team-oriented developer who is always striving to be the best in what I do. 
                        If you're looking for a developer who can bring your ideas to life with passion and expertise, please don't hesitate to
                        <br />
                        <NavLink exact='true' to={'/contact'} className='highlight contact-me'>
                          <AnimatedLetters letterClass={letterClass} strArray={contactArray} idx={25} />
                        </NavLink>
                    </p> 
                </div>

                <div className="skills-container" id='skills'>
                    <div className='stage-cube-cont'>

                        <div className='cubespinner'>
                            <div className='face1'>
                                <FontAwesomeIcon icon={faJava} color='#f89820' />
                            </div>
                            <div className='face2'>
                                <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                            </div>
                            <div className='face3'>
                                <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                            </div>
                            <div className='face4'>
                                <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                            </div>
                            <div className='face5'>
                                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                            </div>
                            <div className='face6'>
                                <FontAwesomeIcon icon={faGitAlt} color='#BC4D28' />
                            </div>
                        </div>
                    </div>

                    

                    <ul className='skills'>
                        <li><h1 className='highlight-green'> <AnimatedLetters letterClass={letterClass} strArray={['S', 'k', 'i', 'l', 'l', 's']} idx={7} /> </h1></li>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Git</li>
                        <li>Java</li>
                        <li>Object Oriented Programming</li>
                    </ul>
                </div>


                <div className="at-home" id='home'>
                    <h1 className='highlight'> <AnimatedLetters letterClass={letterClass} strArray={['A', 't', ' ', 'H', 'o', 'm', 'e']} idx={15} /> </h1>

                    
                    <div className="about-card-body">
                        <AboutCards />
                    </div>
                </div>
                
                
                <div className="footer">
                    <Footer />
                </div>
                
                
            </div>
        </>

    )
} 

export default About