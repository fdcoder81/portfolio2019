import React from "react";
import "./Contact.scss";
import bioImg from "./images/bio.jpg";

const Contact = () => {
  return (
    <div id="contact">
      <div className="profile">
        <img alt="bio" src={bioImg} />
        <button className="available">
          <i class="fas fa-check" />
          <span>Available For Hire</span>
        </button>
      </div>

      <h1>Contact Me</h1>

      <div class="icons-box">
        <div className="icon">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/carlo-anselmi/"
          >
            <i class="fab fa-linkedin fa-2x" />
            <span>LinkedIn : Carlo anselmi</span>
          </a>
        </div>

        <div className="icon">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/fdcoder81"
          >
            <i class="fab fa-github fa-2x" />
            <span>Github : fdcoder81</span>
          </a>
        </div>

        <div className="icon">
          <a href="skype:live:.cid.a672bb53d82bda0d?chat">
            <i class="fab fa-skype fa-2x" />
            <span>Skype : live:.cid.a672bb53d82bda0d</span>
          </a>
        </div>

        <div className="icon">
          <a href="mailto:carloanselmi81@gmail.com">
            <i class="fas fa-envelope fa-2x" />
            <span>Email : carloanselmi81@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
