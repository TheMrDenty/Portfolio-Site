import React, { useEffect, useState } from 'react'
/* import logo from '../images/logo.svg' */
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import sublinks from '../data'





function Navbar() {

    /* const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(!loaded){
            
            // When the user scrolls the page, execute myFunction
            window.onscroll = function() {myFunction()};
            
            // Get the navbar
            var navbar = document.querySelector("nav");
            
            // Get the offset position of the navbar
            var sticky = navbar.offsetTop;
            
            // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
            function myFunction() {
                if (window.pageYOffset >= sticky) {
                    navbar.classList.add("sticky")
                } else {
                    navbar.classList.remove("sticky");
                }
            }
            setLoaded(true)
        }
   
    }, [loaded]) */
    const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

    

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        /* console.log(page); */
        //               gets positional info of target
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, { center, bottom });
    }

    const handleSubmenu = (e) => {
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
                    <h1 className='highlight'>Jamie T.P.</h1>
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>
                    {sublinks.map((link, index) => {
                        const {page} = link;

                        return (
                            <li key={index}>
                                <button className='link-btn' onMouseOver={displaySubmenu}>
                                    {page}
                                </button>
                            </li>
                        )
                    })}
                </ul>
                <button className='btn signin-btn'>
                    Sign In
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar