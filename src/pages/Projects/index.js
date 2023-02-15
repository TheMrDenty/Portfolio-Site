import { useGlobalContext } from '../../context';
import './styles.scss'
import GitHubCalendar from 'react-github-calendar';
import Footer from '../../components/Footer';
import ProjectsNav from '../../components/ProjectsNav';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Projects = () => {
    const {joke, getRandomInt} = useGlobalContext();
    const [currentJoke, setCurrentJoke] = useState();
    const [show, setShow] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate')
    const projectsArray = ['P', 'r', 'o', 'j', 'e', 'c', "t'", 's']
    const gitArray = ['C', 'o', 'm', 'm', 'i', "t'", "s"]

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        
      }, [])

    const handleSetJoke = () => {
        setShow(false)
        setCurrentJoke(getRandomInt(10))
    } 

    useEffect(() => {
        
        handleSetJoke();
    }, [])

    

    const handleShow = () => {
        setShow(true);
    }

    
    
    
    /* console.log(joke[currentJoke]) */
    return (
        <>        
            <div className='projects-page'>

                <h1 className='highlight'>
                    <AnimatedLetters letterClass={letterClass} strArray={projectsArray} idx={1} />
                </h1>
                
                <ProjectsNav id='projects' />
                
                <div className="github" id='github'>
                    <h1 className='highlight'>
                        <AnimatedLetters letterClass={letterClass} strArray={gitArray} idx={9} />
                    </h1>
                    <div className="git-calender">
                        <GitHubCalendar username="themrdenty" year='last' className='calender' showWeekdayLabels color={'#ffdf8e'}/>
                    </div>
                    <a target='_blank' rel='noreferrer' href='https://github.com/TheMrDenty'>
                        <FontAwesomeIcon icon={faGithub} className='FAIcon' />
                        <p>Github</p>
                    </a>
                </div>

                <div className='joke' >
                    <h1>{joke[currentJoke] && joke[currentJoke].setup}</h1>
                    {show? <h1>{joke.length && joke[currentJoke].punchline}</h1> : <button className='flat-button' onClick={handleShow}>Show Punchline</button>}
                    <button id='joke' className='flat-button' onClick={handleSetJoke}>Get Random Joke</button>
                </div>

            </div>

            <div className="footer">
                <Footer />
            </div>

            <Loader type='pacman' className='loader'/>
        </>
    )
} 

export default Projects