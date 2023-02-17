import './styles.scss';
import React from 'react'
import sublinks from '../../data/sublinks-data'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { HashLink } from 'react-router-hash-link';

const Footer = () => {


    return (
        <div className="footer-container">
            
            <div className="sublinks">
                {sublinks.map((item, index) => {
                    const {links, page} = item;
                    return (
                        <div key={index} className={`${page[0]}-footer`}>
                            <Link to={page[1]} >
                                <h4>{page[0]}</h4>
                            </Link>
                            <div className='nav-modal-sublinks'>
                                {links.map((link, index) => {
                                    const {url, icon, label} = link;
                                    return (
                                        <HashLink key={index} className='link-text' to={url}><p>{icon}{label}</p></HashLink>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

            <ul className='links'>
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
    )
}

export default Footer;