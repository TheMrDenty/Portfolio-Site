import './styles.scss';

import React from 'react'
/* import logo from '../images/logo.svg' */
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import sublinks from '../../data/sublinks-data.js'
import { Link, NavLink } from 'react-router-dom';





function Navbar() {
    const {openModal, openSubmenu, closeSubmenu} = useGlobalContext();

    

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        
        //               gets positional info of target
        const tempBtn = e.target.getBoundingClientRect();
        /* console.log(tempBtn); */
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 10;
        openSubmenu(page, { center, bottom });
    }

    const handleSubmenu = (e) => {
        /* console.log(e); */
        if(!e.target.classList.contains('link-btn')) {
            
            closeSubmenu();
        }
    }

  return (
    <div className="nav-container">
        <nav className='nav' onMouseOver={handleSubmenu}>
            <div className='nav-center'>
                <div className='nav-header'>
                    {/* <img src={logo} alt='stripe' className='nav-logo' /> */}
                    <Link className='logo' to='/'>
                        <h1 className='highlight'>Jamie T.P.</h1>
                    </Link>
                    <button className='btn toggle-btn' onClick={openModal}>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>
                    
                    {sublinks.map((link, index) => {
                        /* console.log(sublinks) */
                        const {page} = link;
                        /* console.log(link) */
                        /* console.log(name, url) */

                        return (
                            <li key={index}  >
                                <NavLink exact='true' to={page[1]}>
                                    <button className='link-btn' onMouseOver={displaySubmenu}>
                                        {page[0]}
                                    </button>
                                </NavLink>
                                
                            </li>
                            
                        )
                    })}
                </ul>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar