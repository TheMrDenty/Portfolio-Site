import './styles.scss';

import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import { HashLink } from 'react-router-hash-link';

function Submenu() {

    const {isSubmenuOpen, location, page:{links}} = useGlobalContext();
    /* console.log(page); */
    const container = useRef(null);
    const [columns, setColumns] = useState('col-2');

    useEffect(() => {
        setColumns('col-2');
        const submenu = container.current;
        /* console.log(submenu); */
        const {center, bottom} = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
        /* console.log(submenu.style.top = `${bottom}px`) */
        if(links.length === 3) {
            setColumns('col-3');
          }
          if (links.length > 3) {
            setColumns('col-4');
          }
          
    }, [location, links])

  return (
    <div className="submenu-container">
      <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu' }`} ref={container}>
          
          <div className={`submenu-center ${columns}`}>
              {links.map((link, index) => {
                  
                  const {label, icon, url} = link;
                  
                  return (
                      <HashLink className='link-text'  key={index} to={url}><p>{icon}{label}</p></HashLink>
                  )
              })}
          </div>
      </aside>
    </div>
  )
}

export default Submenu