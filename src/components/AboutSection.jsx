import React  from 'react';
import classes from "./AboutSection.module.css";

function AboutSection() {
  return (
    <div className={classes.aboutcontainer} id="about" >
      <h3 className={classes.title}>About</h3>
      <div className={classes.text}>
        <p className={classes.subtitle}>Hey there!</p>
        <p>I'm a Junior Full Stack Developer with a background in Audiovisual and Multimedia—and a slightly unconventional journey to web development. After a couple of years in Australia, exploring hospitality and healthcare gigs, followed by two more years in the creative world of TV and Cinema Art Departments back home in Portugal, I decided to switch things up and dive into tech.</p>
        <p>Last summer, I took on the challenge of a 9-week Web Development bootcamp with Le Wagon, where I learned the ropes of HTML, CSS, Bootstrap, JavaScript (ES6), SQL, Git, GitHub, Heroku, and Ruby on Rails. Now, I'm deepening my skillset with tools like React, combining creativity and code to make things look pretty on the web.</p>
        <p>With a knack for teamwork, an eye for design, and a drive to keep leveling up, I'm excited to keep pushing my technical skills and have some fun along the way. Let's make the web a more beautiful place, one project at a time!</p>
      </div>
    </div>
  )
}

export default AboutSection;
