import React from 'react'
import './styles.scss'
import pets from '../../data/pets-data'




function Cards() {
  return (
    <>
        <div className='card-group'>
            {pets.map((pet, idx) => {
                const {petName, img} = pet;
                console.log(img, petName);
                
                if (idx % 2 === 0) {
                    console.log(idx);
                    return (
                            <div key={idx} className="little-card card">
                                <h1>{petName}</h1>
                                <img src={img} alt={petName} />
                                
                            </div>
                    )
                } else if (idx % 2 !== 0) {
                    return (
                        <div className="big-card card">
                            <h1>{petName}</h1>
                            <img src={img} alt={petName} />
                        </div>
                    )
                }
            })}
           
        </div>
    </>
  )
}

export default Cards