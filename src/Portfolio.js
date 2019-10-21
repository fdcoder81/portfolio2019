import React from "react";
import "./Portfolio.scss";
import weatherImg from "./images/weather-app.png";
import portfolioImg from "./images/portfolio.png";
import moviesX from "./images/movies-x.png";
import triviaImg from "./images/trivia2.png";
import udemyImg from "./images/udemy.png";
import trailerImg from "./images/trailer_flix.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2>My Work</h2>

      <div className="youtube-container">
        <h3>React Tutorial - Todo App</h3>
        <iframe
          title="Todo App Tutorial"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VhdDmSWyWKI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="projects">
        <figure>
          <img alt="project" src={weatherImg} />
          <figcaption>
            <div>
              <a
                href="https://fdcoder81.github.io/weather-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-eye">
                  <span>Project</span>
                </i>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/fdcoder81/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github">
                  <span>GitHub</span>
                </i>
              </a>
            </div>
          </figcaption>
        </figure>
        <figure className="projects_item">
          <img alt="project" src={moviesX} />
          <figcaption>
            <div>
              <a
                href="https://fdcoder81.github.io/movies-x/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-eye">
                  <span>Project</span>
                </i>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/fdcoder81/movies-x"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github">
                  <span>GitHub</span>
                </i>
              </a>
            </div>
          </figcaption>
        </figure>

        <figure className="projects_item">
          <img alt="project" src={trailerImg} />
          <figcaption>
            <div>
              <a
                href="https://fdcoder81.github.io/trailer-flix/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-eye">
                  <span>Project</span>
                </i>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/fdcoder81/trailer-flix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github">
                  <span>GitHub</span>
                </i>{" "}
              </a>
            </div>
          </figcaption>
        </figure>

        <figure className="projects_item">
          <img alt="project" src={udemyImg} />
          <figcaption>
            <div>
              <a
                href="https://fdcoder81.github.io/udemy-clone/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-eye">
                  <span>Project</span>
                </i>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/fdcoder81/udemy-clone"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github">
                  <span>GitHub</span>
                </i>
              </a>
            </div>
          </figcaption>
        </figure>

        <figure className="projects_item">
          <img alt="project" src={triviaImg} />
          <figcaption>
            <div>
              <a
                href="https://fdcoder81.github.io/trivia-react/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-eye">
                  <span>Project</span>
                </i>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/fdcoder81/trivia-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github">
                  <span>GitHub</span>
                </i>
              </a>
            </div>
          </figcaption>
        </figure>

        <figure className="projects_item">
          <img alt="project" src={portfolioImg} />
          <figcaption>
            <div>
              <a
                href="https://fdcoder81.github.io/portfolio2019/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-eye">
                  <span>Project</span>
                </i>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/fdcoder81/portfolio2019"
                target="_blank"
                rel="noopener noreferrer"
              >
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
