import React from "react"

import "./project.css"


const imgStyle = {
  width: `400px`,
}

const Project = (props) => (
  <div class="project">
    <div style={{
      float: `left`,
      width: props.imgSrc ? `60%` : `100%`,
      minWidth: `300px`,
      // paddingBottom: `100px`,
    }}>
      <a class="project-link" href={props.link}>
        <span><h3 class="project-title-text">{props.title}</h3></span>
      </a>
      <p class='project-description'>{props.description}</p>
      <a class="project-link" href={props.link}>
        <span><h4 class="learn-more">Learn More</h4></span>
      </a>
    </div>
    {props.imgSrc && <div style={{ float: `right` }}>
      <a href={props.imgSrc}>
        <img style={imgStyle} src={props.imgSrc} alt={`project`} />
      </a>
    </div>}
  </div>
)

export default Project;