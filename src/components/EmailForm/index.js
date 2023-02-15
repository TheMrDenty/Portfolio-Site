import React, { useEffect, useRef, useState } from 'react'
import JamieTaberPlaistedResume from '../../data/JamieTaberPlaistedResume.pdf'
import AnimatedLetters from '../../components/AnimatedLetters'
import emailjs from '@emailjs/browser'
import './styles.scss'

function EmailForm() {
   
    const [letterClass, setLetterClass] = useState('text-animate');


    

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    // takes ref from declared form bellow
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                /* service key */'service_un1cx7v',
                /* template key */'template_az14vev',
                /* where user inputs are */form.current,
                /* user token */'Dsqi747GOcBuKxsee'
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
    <div className="email-form">
                <h1>
                    <AnimatedLetters 
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        letterClass={letterClass}
                        idx={15}
                    />
                </h1>
                <p>
                Don't miss this opportunity to connect with a hard-working, dedicated, and team-oriented Junior Web Developer. 
                Fill out the form below to start the conversation and take the next step in our journey.
                <a href={JamieTaberPlaistedResume} download className='highlight'> Download my resume. </a>
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
    </>
  )
}

export default EmailForm