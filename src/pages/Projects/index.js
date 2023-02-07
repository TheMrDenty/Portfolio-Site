import { useGlobalContext } from '../../context';
import './styles.scss'
import GitHubCalendar from 'react-github-calendar';

const Projects = () => {
    const {joke, /* setAboutLoad */} = useGlobalContext();
    
    console.log(joke)


    
    return (
        <>        
            <div className='projects-page'>
                <div className='joke'>
                    <h1>{joke.length && joke[0].setup}</h1>
                    <h1>{joke.length && joke[0].punchline}</h1>
                </div>
                <GitHubCalendar username="themrdenty" year='last' showWeekdayLabels />
            </div>
        </>
    )
} 

export default Projects