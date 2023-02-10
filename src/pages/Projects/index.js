import { useGlobalContext } from '../../context';
import './styles.scss'
import GitHubCalendar from 'react-github-calendar';
import Footer from '../../components/Footer';
import ProjectsNav from '../../components/ProjectsNav';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';

const Projects = () => {
    const {joke} = useGlobalContext();

    const [letterClass, setLetterClass] = useState('text-animate')
    const projectsArray = ['P', 'r', 'o', 'j', 'e', 'c', "t'", 's']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    
    return (
        <>        
            <div className='projects-page'>
                <h1 className='highlight'>
                    <AnimatedLetters letterClass={letterClass} strArray={projectsArray} idx={1} />
                </h1>
                <ProjectsNav />
                <div className="github">
                    <div className='joke'>
                        <h1>{joke.length && joke[0].setup}</h1>
                        <h1>{joke.length && joke[0].punchline}</h1>
                    </div>
                    <GitHubCalendar username="themrdenty" year='last' showWeekdayLabels />
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
} 

export default Projects