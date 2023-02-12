import './styles.scss';

import React from 'react'


import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders';
import Footer from '../../components/Footer';
import EmailForm from '../../components/EmailForm';

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