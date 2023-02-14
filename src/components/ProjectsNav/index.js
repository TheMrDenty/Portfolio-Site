import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import projects from '../../data/projects-data';
import './styles.scss'

function ProjectsNav() {
  

  const getMousePosition = () => {
     document.getElementById("project-cards").onmousemove = e => {
      // loops over all of the cards and sets each cards position based on where the mouses position is
      for(const card of document.getElementsByClassName("project-card")) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
    }
  }
  // gets mouse position after initial load
  useEffect(() => {
    getMousePosition();
  }, [])

  return (
    <>
      <div className="project-cards-container">
        <div id="project-cards">
          {projects.map((project, idx) => {
             const {name, img, id} = project;
             
              /* console.log(project); */
              return (
                <Link 
                    key={idx}
                    state={project}
                    className='project-in-the-way'
                    to={`/projects/${name}`}
                >
                  <div className="project-card">
                    <div className="project-card-border"></div>
                    <div className="project-card-content">
                      <p>{name}</p>
                      <img src={img} alt={name} />
                    </div>
                  </div>
                </Link>

              )
            })}
            
             
        </div>
      </div>
    </>
  )
}

export default ProjectsNav