import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import projects from '../../data/projects-data';
import './styles.scss'

function ProjectsNav() {
  const getMousePosition = () => {
     document.getElementById("cards").onmousemove = e => {
      // loops over all of the cards and sets each cards position based on where the mouses position is
      for(const card of document.getElementsByClassName("card")) {
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
      <div className="cards-container">
        <div id="cards">
          {projects.map((project, idx) => {
             
              /* console.log(project); */
              return (
                <Link 
                    key={idx}
                    
                    to={`/projects/${project.name}`}
                >
                  <div className="card">
                    <div className="card-border"></div>
                    <div className="card-content">
                      <p>{project.name}</p>
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