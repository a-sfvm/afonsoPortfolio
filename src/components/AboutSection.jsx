import React  from 'react';
import classes from "./AboutSection.module.css";

function AboutSection() {
  return (
    <div className={classes.aboutcontainer} id="about" >
      <h3 className={classes.title}>About</h3>
      <div className={classes.text}>
        <p>Hey there! Im a Junior Full Stack Developer with a background in Audiovisual and Multimedia—and a slightly unconventional journey to web development. After a couple of years in Australia, exploring hospitality and healthcare gigs, followed by two more years in the creative world of TV and Cinema Art Departments back home in Portugal, I decided to switch things up and dive into tech.</p>
      </div>
    </div>
  )
}

export default AboutSection;
