import React from 'react'
import {FOOTER,Footer_link,footer__information} from '../Database/data'
function Footer() {
  return (
    <footer className="footer">
         {
            FOOTER.map((footerdata)=>{
                return(
                    <div key={footerdata.id} className='footer__container container grid'>
                        <div className='footer__content grid'>
                            <div>
                                <a href='#' >
                                    <img src={footerdata.footer__logo} className='footer__logo' alt='footer image'/>
                                </a>
                                <p className='footer__description'>
                                    {footerdata.footer__description1} <br/>
                                    {footerdata.footer__description2} <br/>
                                    {footerdata.footer__description3} 
                                </p>

                            </div>
                            <div className='footer__data grid'>
                               {
                                footer__information.map((footer_infodata)=>{
                                    return(
                                        <div key={footer_infodata.id}>
                                        <h3 className='footer__title'>{footer_infodata.footer__title}</h3>
                                        <p className='footer__info'>
                                            {footer_infodata.footer__info1}<br/>
                                            {footer_infodata.footer__info2}
                                        </p>
                                    </div>
                                    )
                                })
                               }
                            </div>
                        </div>

                        <div className='footer__group'>
                        <ul className='footer__social'>
                                {
                                    Footer_link.map((linkdata)=>{
                                        return(
                                          
                          
                                            <li key={linkdata.id}>
                                             <a href={linkdata.footer__social_link} target='_blank' className='footer__social-link'>
                                             <svg width='1.5rem' height='1.5rem'>
                                                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                                  <stop stopColor="#ff52ae" offset="12%" />
                                                  <stop stopColor="#8b52ff" offset="90%" />
                                                </linearGradient>
                                               
                                                </svg>
                                                <linkdata.icon style={{ fill: "url(#blue-gradient)"}}/>
                                            </a>
                                        </li>
                                     
                                        )
                                    })
                                }
                             </ul>
                            <span className='footer__copy'>
                            &#169; {footerdata.footer__copy}
                            </span>
                        </div>
                    </div>
                )
            })
         }
      </footer>
  )
}

export default Footer