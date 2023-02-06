import './styles.scss'
import { useGlobalContext } from '../../context';
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';



const About = () => {
    const {catFact, /* setAboutLoad */} = useGlobalContext();
    
    console.log(catFact)
    
    
    useEffect(() => {
        const afterFirstLoad = setTimeout(catFact, 1000)
        /* setAboutLoad(true); */
    }, [])
    
    
    

    return (
        <>        
            <div className='about-page'>
                <div className='cat-fact'>
                    <h1>{catFact.length && catFact[0].text}</h1>
                </div>
            </div>
        </>

    )
} 

export default About