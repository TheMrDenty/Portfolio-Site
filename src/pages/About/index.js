import './styles.scss'
import AnimatedLetters from '../../components/AnimatedLetters'
import { useGlobalContext } from '../../context';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/index';




const About = () => {
    const {catFact, /* setAboutLoad */} = useGlobalContext();
    
    /* console.log(catFact) */
    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    
    
    
    
    

    return (
        <>        
            <div className='about-page'>

                <div className="about">

                <h1 className='highlight'> <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={1} /> </h1>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius minus rerum nobis quas tempore obcaecati. Laboriosam alias labore praesentium? Saepe autem praesentium libero harum eveniet exercitationem quod iure omnis.
                    Quos aliquam non, debitis, maiores est dolorem dignissimos provident inventore cupiditate fugiat quis harum tenetur? Fuga vero laudantium, eos reprehenderit cupiditate consectetur fugiat delectus earum accusamus hic, ipsa omnis expedita.
                    Quis corrupti asperiores tenetur dolorum hic ab id, odio tempora ipsam iure esse in dignissimos ea, laudantium dolorem. Quis cupiditate distinctio illo adipisci voluptatum, a dolore consectetur velit excepturi sequi.
                    Incidunt autem temporibus minima. Delectus, ipsum consequatur. Asperiores magnam vitae, nam a recusandae quod repudiandae sed facilis esse odio. Doloribus quasi magnam enim asperiores earum pariatur blanditiis. Fugit, maiores excepturi.
                </div>

                <div className="skills-container">
                    <div className='stage-cube-cont'>

                        <div className='cubespinner'>
                            <div className='face1'>
                                <FontAwesomeIcon icon={faAngular} color='#DD0031' />
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
                        <li>feafaadaaf</li>
                        <li>eggsefefeaded</li>
                        <li>aggvsdfesadascasada</li>
                        <li>agefef</li>
                        <li>egfdsvdsdaa</li>
                        <li>fefeaa</li>
                        <li>afasfcasdaswdad</li>
                    </ul>
                </div>


                <div className="at-home">
                    <h1 className='highlight'> <AnimatedLetters letterClass={letterClass} strArray={['A', 't', ' ', 'H', 'o', 'm', 'e']} idx={15} /> </h1>

                    <div className='cat-fact'>
                        <h1>{catFact.length && catFact[0].text}</h1>
                    </div>
                </div>
                
                
                <Footer />
                
                
            </div>
        </>

    )
} 

export default About