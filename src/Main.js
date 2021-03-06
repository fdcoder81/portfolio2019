import React from "react";
import "./Main.scss";
import bioImg from "./images/bio.jpg";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <div id="info">
        <h1 className="primary-heading">
          Carlo <span class="text-secondary">Anselmi</span>
        </h1>
        <h2 className="secondary-heading">Front End Developer - React.js</h2>
        <h2 className="skills-heading">My Skills :</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Responsive web design</li>
          <li>GIT</li>
          <li>Github</li>
        </ul>

        <NavLink to="/portfolio">
          <div class="button-div">
            <button
              class="button-projects"
              target="_blank"
              rel="nofollow noopener"
            >
              Check out my projects
            </button>
          </div>
        </NavLink>
      </div>

      <div id="about-me">
        <img alt="profile" src={bioImg} />
        <h2>About Me</h2>
        <h3>
          I'm a front-end web developer, tech enthusiast and passionate about
          web development.
        </h3>
        <div class="icons">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/carlo-anselmi/"
          >
            <i class="fab fa-linkedin fa-2x" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/fdcoder81"
          >
            <i class="fab fa-github fa-2x" />
          </a>
          <a href="skype:live:.cid.a672bb53d82bda0d?chat">
            <i class="fab fa-skype fa-2x" />
          </a>
          <a href="mailto:carloanselmi81@gmail.com">
            <i class="fas fa-envelope fa-2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
