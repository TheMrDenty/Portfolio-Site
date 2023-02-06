import { useGlobalContext } from '../../context';
import './styles.scss'

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
            </div>
        </>
    )
} 

export default Projects