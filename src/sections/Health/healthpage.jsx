import React from 'react'
import {HEALTH} from '../../Database/data'
// import Link
import {Link} from 'react-router-dom'
//import icon
import {FaArrowRight} from 'react-icons/fa6'
import {FaHeart} from 'react-icons/fa6'
function healthpage() {
  return (
    <section className="health section" id="health">
       {
        HEALTH.map((healthdata)=>{
            return(
                <div key={healthdata.id} className='health__container container grid'>
                <div className='health__data'>
                    <h2 className='section__title'>
                        {healthdata.section__title}
                    </h2>

                    <p className='health__description'>
                        {healthdata.health__description}
                    </p>
                    <Link to='/' className='button'>
                                {healthdata.button} <FaArrowRight className='i'/>  
                     </Link>


                </div>
                <div className='health__image'>
                    <img src={healthdata.health__image} alt='health image' className='health__img'/>
                    <div  className='health__rate'>
                              <div className='health__icon'>
                            <FaHeart className='i'/>
                              </div>
                            <div className='health__group'>
                            <span className='health__title'>
                            Heart Rate
                            </span>
                            <span className='health__number'>
                            168 bpm
                            </span>
                        </div>

                       </div>

                       <div  className='health__course'>
                              
                            <div className='health__group'>
                            <span className='health__number'>
                            500+
                            </span>
                            <span className='health__title'>
                            Free Courses
                            </span>
                        </div>

                       </div>
                   

                </div>
            </div>
            )
        })
       }
            
         </section>
  )
}

export default healthpage