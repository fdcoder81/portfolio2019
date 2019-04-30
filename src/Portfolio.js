import React from "react";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2>My Work</h2>
      <div className="projects">
        <figure className="projects_item">
          <img src="./coming.jpg" />
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
          <img src="./coming.jpg" />
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
          <img src="./coming.jpg" />
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
          <img src="./coming.jpg" />
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
