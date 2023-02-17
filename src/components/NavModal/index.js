import './styles.scss';

import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import sublinks from '../../data/sublinks-data'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function NavModal() {

    const {isNavModalOpen, closeNavModal} = useGlobalContext();

  return (
    <aside className={`${isNavModalOpen ? 'nav-modal-wrapper show' : 'nav-modal-wrapper'}`}>
        <div className='nav-modal'>
            <button className='close-btn' onClick={closeNavModal}>
                <FaTimes />
            </button>
            <div className='nav-modal-links'>
                {sublinks.map((item, index) => {
                    const {links, page} = item;
                    return (
                        <article key={index}>
                            <NavLink exact='true' to={page[1]} onClick={closeNavModal}>
                                <h4>{page[0]}</h4>
                            </NavLink>
                            <div className='nav-modal-sublinks'>
                                {links.map((link, index) => {
                                    const {url, icon, label} = link;
                                    return (
                                        <HashLink key={index} onClick={closeNavModal} className='link-text' to={url}><p>{icon}{label}</p></HashLink>
                                    )
                                })}
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    </aside>
  )
}

export default NavModal