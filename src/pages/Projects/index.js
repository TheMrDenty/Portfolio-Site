import { useGlobalContext } from '../../context';
import './styles.scss'
import GitHubCalendar from 'react-github-calendar';
import Footer from '../../components/Footer';
import ProjectsNav from '../../components/ProjectsNav';

const Projects = () => {
    const {joke, /* setAboutLoad */} = useGlobalContext();
    



    
    return (
        <>        
            <div className='projects-page'>
                <ProjectsNav />
                <div className="github">
                    <div className='joke'>
                        <h1>{joke.length && joke[0].setup}</h1>
                        <h1>{joke.length && joke[0].punchline}</h1>
                    </div>
                    <GitHubCalendar username="themrdenty" year='last' showWeekdayLabels />
                </div>
            </div>
            <Footer />
        </>
    )
} 

export default Projects