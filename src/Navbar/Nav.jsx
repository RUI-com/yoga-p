import React from 'react'
//import logo image
import Logo from '../Image/logo/logo-color.svg'
// import Link
import {Link} from 'react-router-dom'
// import Database
import {Navbar} from '../Database/data'
//import icon
import {IoCloseSharp} from 'react-icons/io5'
import {RiApps2Line} from 'react-icons/ri'
import {PiMoonBold} from 'react-icons/pi'
function Nav() {
    
  
  return (
    <header className="header" id="header">
       <nav className='nav container'>
        <Link to='/'  className='nav__logo'><img src={Logo} alt='Yoga'/></Link>
        <div className='nav__menu' id='nav-menu'>
            <ul className='nav__list'>
                {
                    Navbar.map((navbar) =>{
                        return(
                            <li className='nav__item' key={navbar.id}>
                                <a href={navbar.Path} className={`nav__link ${navbar.Name}`}>{navbar.Title}</a>
                            </li>
                        )
                    })
                }

            </ul>

            {/* Close buttton */}
            <div className='nav__close' id='nav-close'>
                <IoCloseSharp/>
            </div>
        </div>
        <div className='nav__buttons'>
            {/* Theme Change button */}
                <PiMoonBold className='change-theme' id='theme-button'/>
                  {/* Toggle button */}
            <div className='nav__toggle' id='nav-toggle'>
                <RiApps2Line/>
            </div>
        </div>
          
       </nav>
    </header>
 
  )
}

export default Nav