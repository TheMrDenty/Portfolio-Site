import React from 'react'
import './styles.scss'
import pets from '../../data/pets-data'
import hobbies from '../../data/hobbies-data'
import music from '../../data/music-data'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'



function Cards() {

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
            <div className='about-card-group' data-index='0' data-status='active'>
                {pets.map((pet, idx) => {
                    const {petName, img} = pet;
                    console.log(img, petName);
                    
                    if (idx % 2 === 0) {
                        console.log(idx);
                        return (
                                <div key={idx} className="little-about-card about-card">
                                    <h1>{petName}</h1>
                                    <img src={img} alt={petName} />
                                    
                                </div>
                        )
                    } else if (idx % 2 !== 0) {
                        return (
                            <div className="big-about-card about-card">
                                <h1>{petName}</h1>
                                <img src={img} alt={petName} />
                            </div>
                        )
                    }
                    return null
                })}
            
            </div>
            <div className='about-card-group' data-index='1' data-status='unknown'>
                {hobbies.map((hobby, idx) => {
                    const {petName, img} = hobby;
                    console.log(img, petName);
                    
                    if (idx % 2 === 0) {
                        console.log(idx);
                        return (
                                <div key={idx} className="little-about-card about-card">
                                    <h1>{petName}</h1>
                                    <img src={img} alt={petName} />
                                    
                                </div>
                        )
                    } else if (idx % 2 !== 0) {
                        return (
                            <div className="big-about-card about-card">
                                <h1>{petName}</h1>
                                <img src={img} alt={petName} />
                            </div>
                        )
                    }
                    return null
                })}
            
            </div>
            <div className='about-card-group' data-index='2' data-status='unknown'>
                {music.map((music, idx) => {
                    const {petName, img} = music;
                    console.log(img, petName);
                    
                    if (idx % 2 === 0) {
                        console.log(idx);
                        return (
                                <div key={idx} className="little-about-card about-card">
                                    <h1>{petName}</h1>
                                    <img src={img} alt={petName} />
                                    
                                </div>
                        )
                    } else if (idx % 2 !== 0) {
                        return (
                            <div className="big-about-card about-card">
                                <h1>{petName}</h1>
                                <img src={img} alt={petName} />
                            </div>
                        )
                    }
                    return null
                })}
            
            </div>
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