import React from "react";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2>My Work</h2>
      <div className="projects">
        <figure>
          <img src="./images/weather-app.png" />
          <figcaption>
            <div>
              <a href="https://fdcoder81.github.io/weather-app-react/">
                <i className="fas fa-eye">
                  <span>Project</span>
                </i>
              </a>
            </div>
            <div>
              <a href="https://fdcoder81.github.io/weather-app-react/">
                <i className="fab fa-github">
                  <span>GitHub</span>
                </i>
              </a>
            </div>
          </figcaption>
        </figure>
        <figure className="projects_item">
          <img src="./images/coming.jpg" />
          <figcaption>
            <div>
              <i className="fas fa-eye">
                <span>Project</span>
              </i>
            </div>
            <div>
              <i className="fab fa-github">
                <span>GitHub</span>
              </i>
            </div>
          </figcaption>
        </figure>

        <figure className="projects_item">
          <img src="./images/coming.jpg" />
          <figcaption>
            <div>
              <i className="fas fa-eye">
                <span>Project</span>
              </i>
            </div>
            <div>
              <i className="fab fa-github">
                <span>GitHub</span>
              </i>
            </div>
          </figcaption>
        </figure>

        <figure className="projects_item">
          <img src="./images/coming.jpg" />
          <figcaption>
            <div>
              <i className="fas fa-eye">
                <span>Project</span>
              </i>
            </div>
            <div>
              <i className="fab fa-github">
                <span>GitHub</span>
              </i>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Portfolio;
