import './styles.scss';
import React from 'react'
import sublinks from '../../data'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {


    return (
        <div className="footer-container">
            <div className="sublinks">
                {sublinks.map((item, index) => {
                    const {links, page} = item;
                    return (
                        <article key={index}>
                            <Link to={page[1]} >
                                <h4>{page[0]}</h4>
                            </Link>
                            <div className='modal-sublinks'>
                                {links.map((link, index) => {
                                    const {url, icon, label} = link;
                                    return (
                                        <a key={index} href={url}>{icon}{label}</a>
                                    )
                                })}
                            </div>
                        </article>
                    )
                })}
            </div>

            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jamie-taber-plaisted-545a4217b/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/TheMrDenty'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;