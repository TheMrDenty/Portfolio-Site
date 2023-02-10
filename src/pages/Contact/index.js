import './styles.scss';

import React, { useEffect, useRef, useState } from 'react'

import AnimatedLetters from '../../components/AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders';
import Footer from '../../components/Footer';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef()

    

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_un1cx7v',
                'template_az14vev',
                form.current,
                'Dsqi747GOcBuKxsee'
            )
            .then (
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }

    
    return (
        <>
        <div className='contact-page'>
            <div className="email-form">
                <h1>
                    <AnimatedLetters 
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        letterClass={letterClass}
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

            
            <div className='map-wrap'>
                <div className="info-map">
                    Jamie Taber-Plaisted,
                    <br />
                    USA,
                    <br />
                    Elmira, NY<br />
                    <br />
                    <span>jamietp113@gmail.com</span>
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