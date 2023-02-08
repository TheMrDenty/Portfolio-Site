import './styles.scss';

import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import sublinks from '../../data'

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
                            <h4>{page}</h4>
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
        </div>
    </aside>
  )
}

export default Modal