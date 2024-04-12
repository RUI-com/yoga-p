import React from 'react'
import {ROUTINE} from '../../Database/data'
//import icon
import {FaArrowRight,FaCirclePlay} from 'react-icons/fa6'
import {FaRunning} from 'react-icons/fa'

function routinepage() {
  return (
    <section className="routine section" id="routine">
        {
            ROUTINE.map((routinedata)=>{
                return(
                    <div key={routinedata.id} className='routine__container container grid'>
                        <div className='routine__data'>
                            <h2 className='section__title'>{routinedata.section__title}</h2>
                            <p className='routine__description'>
                                {routinedata.routine__description}
                            </p>
                            <a href='#' className='button'>
                                {routinedata.button} <FaArrowRight className='i'/>
                            </a>
                        </div>
                        <div className='routine__images'>
                            <img src={routinedata.routine__imag_1} alt='routine image' className='routine__img-1'/>
                            <img src={routinedata.routine__imag_2} alt='routine image' className='routine__img-2'/>
                           
                            <div className='routine__box-1'>
                                <FaCirclePlay style={{ fill: "url(#blue-gradient)"}} className='routine__icon'/>

                                <span className='routine__title'>{routinedata.routine__title_1}</span>
                            </div>
                            <div className='routine__box-2'>
                            <FaRunning style={{ fill: "url(#blue-gradient)"}} className='routine__icon'/>
                                <span className='routine__title'>{routinedata.routine__title_2}</span>
                            </div>
                        </div>

                    </div>
                )
            })
        }

            
    </section>
  )
}

export default routinepage