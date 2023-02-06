import './styles.scss'
import { useGlobalContext } from '../../context';
import Loader from 'react-loaders';
import { useEffect } from 'react';



const About = () => {
    const {catFact} = useGlobalContext();
    console.log(catFact)
    
    

    
    
    

    return (
        <>        
            <div className='about-page'>
                <div className='cat-fact'>
                    <h1>{catFact[0].text}</h1>
                </div>
            </div>
            
        </>

    )
} 

export default About