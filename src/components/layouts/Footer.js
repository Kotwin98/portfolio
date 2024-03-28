import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/layouts/Footer.scss";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_socials">
        &copy;2024{" "}
        <a
          target="_blank"
          href="https://github.com/Kotwin98/portfolio"
          rel="noopener noreferrer"
        >
          Mateusz Kotwiński
        </a>
        <a
          className="footer_social"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Kotwin98"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="footer_social"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mateusz-kotwi%C5%84ski"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="footer_social footer_social--hidden"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:mkotwinski98@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </p>
      <ul className="footer_menu">
        <li>
          <NavLink exact to="/skills" className="footer_link">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/portfolio" className="footer_link">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" className="footer_link">
            Contact
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
