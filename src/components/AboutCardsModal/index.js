import './styles.scss'
import React from 'react'
import { useGlobalContext } from '../../context';
import { FaTimes } from 'react-icons/fa';

function AboutCardsModal() {
    const {isAboutCardsModalOpen, closeAboutCardsModal} = useGlobalContext();
  return (
    <aside className={`${isAboutCardsModalOpen ? 'about-cards-modal-container show' : 'about-cards-modal-container'}`}>
        <div className='about-cards-modal'>
            <button className='close-btn' onClick={closeAboutCardsModal}>
                <FaTimes />
                more to come in the future!
            </button>
            
        </div>
    </aside>
  )
}

export default AboutCardsModal