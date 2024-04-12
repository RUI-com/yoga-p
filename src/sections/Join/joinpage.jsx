import React from 'react'
import {JOIN} from '../../Database/data'
//import icon
import {FaArrowRight} from 'react-icons/fa6'
function joinpage() {
  return (
    <section className="join section">
          {
            JOIN.map((joindata)=>{
              return(
                <div key={joindata.id} className='join__container container grid'>
                  <div className='join__content'>
                    <div>
                      <h2 className='join__title'>
                        {joindata.section__title}
                      </h2>
                      <p className='join__description'>
                        {joindata.join__description}
                      </p>

                    </div>
                    <form action='' className='join__form'>
                      <input type='email' placeholder={joindata.join__input_placeholder} className='join__input'/>
                      <button  className='button join__button'>
                                {joindata.join__button} <FaArrowRight className='i'/>
                            </button>

                    </form>
                  </div>
                </div>
              )
            })
          }  
    </section>
  )
}

export default joinpage