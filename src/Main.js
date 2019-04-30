import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <div id="main">
      <div id="info">
        <h1>
          Carlo <span class="text-secondary">Anselmi</span>
        </h1>
        <h2>Front End Developer - React.js</h2>
        <h2>My Skills :</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS (SCSS)</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Responsive web design</li>
          <li>GIT</li>
          <li>Github</li>
        </ul>
        <div class="icons">
          <a href="">
            <i class="fab fa-linkedin fa-2x" />
          </a>
          <a href="">
            <i class="fab fa-github fa-2x" />
          </a>
          <a href="">
            <i class="fas fa-envelope fa-2x" />
          </a>
        </div>
      </div>
      <div id="about-me">
        <img src="./bio.jpg" />
        <h2>About Me</h2>
        <h3>
          I'm a front-end web developer, tech enthusiast and passionate about
          web development.
        </h3>
      </div>
    </div>
  );
};

export default Main;
