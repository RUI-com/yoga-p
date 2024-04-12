import React from 'react'
// import data
import {Homesection,Home_box} from '../../Database/data'

//import icon
import {FaArrowRight} from 'react-icons/fa6'
function homepage() {
  return (
    <section className="home section" id="home">
      
            {
                Homesection.map((homedata)=>{
                    return(
                        <div className='home__container container grid' key={homedata.id}>
                            <div className='home__data' >
                            <h1 className='home__title'>
                            Choose Your 
                            <div className='home__title-box'>
                                Best<div>Yoga</div>
                            </div>
                            Teacher
                            <img src={homedata.image_star} alt='Home image'/>
                            </h1>
                            <p className='home__description'>{homedata.home__description}
                            <img src={homedata.image_circle} alt='Home image'/>
                            </p>
                            <a href='#' className='button'>
                                {homedata.button} <FaArrowRight className='i'/>
                            </a>
                            <div className='home__box'>
                                {
                                    Home_box.map((homebox)=>{
                                        return(
                                            <div key={homebox.id}>
                                                <h3>{homebox.h3}</h3>
                                                <span>{homebox.span}</span>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                           

                        </div>
                        <img src={homedata.home_img} alt='Home image' className='home__img'/>
                        </div>
                    )
                })
            }

       
      
    </section>
  )
}

export default homepage