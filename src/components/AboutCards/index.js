import React from 'react'
import './styles.scss'

import aboutTopics from '../../data/about-data'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useGlobalContext } from '../../context'



function Cards() {
    const {openAboutCardsModal} = useGlobalContext();

    let activeIndex = 0;

    const groups = document.getElementsByClassName('about-card-group')

    const handleRightClick = () => {
        // increase active index
        const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

        const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
            nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

        // active group becomes after
        currentGroup.dataset.status = 'after';

        // next group becomes active
        nextGroup.dataset.status = 'becoming-active-from-before';

        setTimeout(() => {
            nextGroup.dataset.status = 'active';

            activeIndex = nextIndex;
        })

        
    }

    const handleLeftClick = () => {
        // decrease active index
        const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1 ;

        const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
            nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

        // active group becomes before
        currentGroup.dataset.status = 'before';

        // next group becomes active
        nextGroup.dataset.status = 'becoming-active-from-after';

        setTimeout(() => {
            nextGroup.dataset.status = 'active';

            activeIndex = nextIndex;
        })
    }

  return (
    <div className="about-card-swiper">
        <div className='about-card-groups'>
            {aboutTopics.map((topic, idx) => {
                const {content} = topic
                /* console.log(content, idx); */
                // first index gets active status
                if (idx === 0) {
                    return (
                        <div key={idx} className='about-card-group' data-index={idx} data-status='active'>
                            {content.map((topic, idx) => {
                                const {name, img} = topic;
                                /* console.log(img, petName); */
                                
                                if (idx % 2 === 0) {
                                    /* console.log(idx); */
                                    return (
                                            <div onClick={openAboutCardsModal} key={idx} className="little-about-card about-card">
                                                <h1>{name}</h1>
                                                <img src={img} alt={name} />
                                                
                                            </div>
                                    )
                                } else if (idx % 2 !== 0) {
                                    return (
                                        <div onClick={openAboutCardsModal} key={idx} className="big-about-card about-card">
                                            <h1>{name}</h1>
                                            <img src={img} alt={name} />
                                        </div>
                                    )
                                }
                                return null
                            })}
                        </div>
                    )
                } else {
                    return (
                        <div className='about-card-group' data-index={idx} data-status='unknown'>
                            {content.map((topic, idx) => {
                                const {name, img} = topic;
                                /* console.log(img, petName); */
                                
                                if (idx % 2 === 0) {
                                    /* console.log(idx); */
                                    return (
                                            <div onClick={openAboutCardsModal} key={idx} className="little-about-card about-card">
                                                <h1>{name}</h1>
                                                <img src={img} alt={name} />
                                                
                                            </div>
                                    )
                                } else if (idx % 2 !== 0) {
                                    return (
                                        <div onClick={openAboutCardsModal} className="big-about-card about-card">
                                            <h1>{name}</h1>
                                            <img src={img} alt={name} />
                                        </div>
                                    )
                                }
                                return null
                            })}
                        </div>
                    )
                }
                
            })}
            
        </div>
        <div className="about-card-swiper-buttons">
            <button id='left-button' onClick={handleLeftClick}>
                <FontAwesomeIcon icon={faCircleArrowLeft} />
            </button>
            <button id='right-button' onClick={handleRightClick}>
                <FontAwesomeIcon icon={faCircleArrowRight} />
            </button>
            
        </div>
    </div>
  )
}

export default Cards