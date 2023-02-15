import './styles.scss';

import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import sublinks from '../../data/sublinks-data'
import { NavLink } from 'react-router-dom';

function Modal() {

    const {isModalOpen, closeModal} = useGlobalContext();

  return (
    <aside className={`${isModalOpen ? 'modal-wrapper show' : 'modal-wrapper'}`}>
        <div className='modal'>
            <button className='close-btn' onClick={closeModal}>
                <FaTimes />
            </button>
            <div className='modal-links'>
                {sublinks.map((item, index) => {
                    const {links, page} = item;
                    return (
                        <article key={index}>
                            <NavLink exact='true' to={page[1]} onClick={closeModal}>
                                <h4>{page[0]}</h4>
                            </NavLink>
                            <div className='modal-sublinks'>
                                {links.map((link, index) => {
                                    const {url, icon, label} = link;
                                    return (
                                        <p key={index}><a  href={url}>{icon}{label}</a></p>
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

export default Modal