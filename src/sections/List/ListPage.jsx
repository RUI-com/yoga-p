import React from 'react'
//import Data
import {LIST} from '../../Database/data'
//Link
import { Link } from 'react-router-dom' 
//import icon
import {FaArrowRight} from 'react-icons/fa6'
function ListPage() {
  return (
    <section className="list section">
        {
            LIST.map((listdata)=>{
                return(
                    <div key={listdata.id} className='list__container container grid'>
                        <div className='list__content'>
                            <h1 className='list__number'>{listdata.list__number}</h1>
                            <div className='list__blob'>
                                <img src={listdata.list__img} alt='list image'/>
                            </div>
                        </div>

                        <div className='list__data'>
                            <p className='list__description'>
                                {listdata.list__description}
                                <img src={listdata.list__star} alt='list image'/>
                            </p>
                            <Link to='/' className='button list__button'>
                                {listdata.list__button} <FaArrowRight className='i' style={{ fill: "url(#blue-gradient)"}}/>
                                <img src={listdata.list__ellipse} alt='button image'/>
                            </Link>


                        </div>

                    </div>
                )
            })
        }
            
    </section>
  )
}

export default ListPage