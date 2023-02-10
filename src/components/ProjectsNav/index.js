import React from 'react'
import './styles.scss'

function ProjectsNav() {


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

  return (
    <>
      <div className="cards-container">
        <div id="cards">
            <div className="card">
              <div className="card-border"></div>
              <div className="card-content"></div>
            </div>
            <div className="card">
              <div className="card-border"></div>
              <div className="card-content"></div>
            </div>
            <div className="card">
              <div className="card-border"></div>
              <div className="card-content"></div>
            </div>
            <div className="card">
              <div className="card-border"></div>
              <div className="card-content"></div>
            </div>
            <div className="card">
              <div className="card-border"></div>
              <div className="card-content"></div>
            </div>
            <div className="card">
              <div className="card-border"></div>
              <div className="card-content"></div>
            </div>
             
        </div>
      </div>
    </>
  )
}

export default ProjectsNav