import './styles.scss';

import React from 'react'

import JamieTaberPlaistedResume from '../../data/JamieTaberPlaistedResume.pdf'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders';
import Footer from '../../components/Footer';
import EmailForm from '../../components/EmailForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    

    

    
    return (
        <>
        <div className='contact-page'>
            <EmailForm />

            
            <div className='map-wrap'>
                <div className="info-map">
                    Jamie Taber-Plaisted,
                    <br />
                    USA,
                    <br />
                    Elmira, NY<br />
                    <br />
                    <a href={JamieTaberPlaistedResume} download className='highlight'> Download my resume </a>
                    <span>jamietp113@gmail.com</span>
                    <ul className='about-links'>
                        <li>
                            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jamie-taber-plaisted-545a4217b/'>
                                <FontAwesomeIcon icon={faLinkedin}  />
                            </a>
                        </li>
                        <li>
                            <a target='_blank' rel='noreferrer' href='https://github.com/TheMrDenty'>
                                <FontAwesomeIcon icon={faGithub} className='FAIcon' />
                            </a>
                        </li>
                    </ul>
                </div>
                <MapContainer center={[	42.089796,  -76.807734]} zoom={13} className='map'>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[	42.089796,  -76.807734]}>
                        <Popup>Jamie lives here</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
        <Loader type='pacman' className='loader'/>
    </>
    )
}

export default Contact;