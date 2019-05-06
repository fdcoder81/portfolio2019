import React from "react";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2>My Work</h2>
      <div className="projects">
        <figure>
          <img alt="project" src="./images/weather-app.png" />
          <figcaption>
            <div>
              <a href="https://fdcoder81.github.io/weather-app-react/">
                <i className="fas fa-eye">
                  <span>Project</span>
                </i>
              </a>
            </div>
            <div>
              <a href="https://github.com/fdcoder81/weather-app-react">
                <i className="fab fa-github">
                  <span>GitHub</span>
                </i>
              </a>
            </div>
          </figcaption>
        </figure>
        <figure className="projects_item">
          <img alt="project" src="./images/travel.png" />
          <figcaption>
            <div>
              <a href="https://fdcoder81.github.io/Travel-Booking-website/">
                <i className="fas fa-eye">
                  <span>Project</span>
                </i>
              </a>
            </div>
            <div>
              <a href="https://github.com/fdcoder81/Travel-Booking-website">
                <i className="fab fa-github">
                  <span>GitHub</span>
                </i>
              </a>
            </div>
          </figcaption>
        </figure>

        <figure className="projects_item">
          <img alt="project" src="./images/trivia.png" />
          <figcaption>
            <div>
              <a href="https://github.com/fdcoder81/trivia-game">
                <i className="fas fa-eye">
                  <span>Project</span>
                </i>
              </a>
            </div>
            <div>
              <a href="https://fdcoder81.github.io/trivia-game/">
                <i className="fab fa-github">
                  <span>GitHub</span>
                </i>
              </a>
            </div>
          </figcaption>
        </figure>

        <figure className="projects_item">
          <img alt="project" src="./images/portfolio.png" />
          <figcaption>
            <div>
              <a href="https://fdcoder81.github.io/portfolio2019/">
                <i className="fas fa-eye">
                  <span>Project</span>
                </i>
              </a>
            </div>
            <div>
              <a href="https://github.com/fdcoder81/portfolio2019">
                <i className="fab fa-github">
                  <span>GitHub</span>
                </i>{" "}
              </a>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Portfolio;
