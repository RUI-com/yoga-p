import React from 'react'
//import data
import {FOLLOW} from '../../Database/data'
//import icon
import {FaArrowRight} from 'react-icons/fa6'
function followpage() {
  return (
    <section className="follow section" id="follow">
            {
                FOLLOW.map((followdata)=>{
                    return(
                        <div key={followdata.id} className='follow__container container grid'>
                            <div className='follow__content-1'>
                                <div className='follow__data'>
                                    <h2 className='section__title follow__title'>
                                        {followdata.section__title}
                                        <div>#YOGA</div>
                                    </h2>
                                    <a href='#' className='button follow__button'>
                                {followdata.follow__button} <FaArrowRight className='i'/>
                                    </a>
                                </div>


                                <img src={followdata.follow__img_1} alt='follow image' className='follow__img-1'/>
                                <img src={followdata.follow__img_2} alt='follow image' className='follow__img-2'/>

                            </div>
                            <div className='follow__content-2'>
                            <img src={followdata.follow__img_3} alt='follow image' className='follow__img-3'/>
                            <img src={followdata.follow__img_4} alt='follow image' className='follow__img-4'/>
 
                            </div>



                        </div>
                    )
                })
            }
    </section>
  )
}

export default followpage