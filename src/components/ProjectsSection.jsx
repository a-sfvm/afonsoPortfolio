import React from 'react';
import classes from "./ProjectsSection.module.css"
import RnrCarousel from "./RnrCarousel";
import SurfbuddyCarousel from "./SurfbuddyCarousel";

import { IoArrowForwardOutline } from "react-icons/io5";

function ProjectsSection() {
  return (
    <>
      <div id="projects" >
        <h1 className={classes.title}>Projects</h1>
        <div className={classes.project}>
          <SurfbuddyCarousel />
          <div>
            <a href="https://www.surfbuddy.live/" rel="noopener noreferrer" target="_blank">
              <h4 className={classes.projectName}>SurfBuddy.live  <IoArrowForwardOutline className={classes.icon} /></h4>
            </a>
            <p className={classes.description}>Final project for the LeWagon Bootcamp. Web application that sends real-time alerts based on surf conditions in Portugal, thanks to a collaboration with the AI team analyzing surf webcams.</p>
            <div className={classes.tools}>
              <span className={classes.tool}>Ruby on Rails</span>
              <span className={classes.tool}>HTML</span>
              <span className={classes.tool}>SCSS</span>
              <span className={classes.tool}>Bootstrap</span>
              <span className={classes.tool}>Heroku</span>
            </div>
          </div>
        </div>
        <div className={classes.project}>
          <RnrCarousel />
          <div>
            <a href="https://github.com/daCunhaFerreira/SURF_RnR" rel="noopener noreferrer" target="_blank">
              <h4 className={classes.projectName}>Surf RnR  <IoArrowForwardOutline className={classes.icon} /></h4>
            </a>
            <p className={classes.description}>A web app (cloning Airbnb) where users can rent surfboards from local owners wherever they may be.</p>
            <div className={classes.tools}>
              <span className={classes.tool}>Ruby on Rails</span>
              <span className={classes.tool}>JavaScript</span>
              <span className={classes.tool}>HTML</span>
              <span className={classes.tool}>SCSS</span>
              <span className={classes.tool}>Heroku</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsSection;
