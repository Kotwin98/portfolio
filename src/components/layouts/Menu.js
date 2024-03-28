import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/layouts/Menu.scss";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  // const list = [
  //   { name: "Home", path: "/" },
  //   { name: "Skills", path: "/skills" },
  //   { name: "Portfolio", path: "/portfolio" },
  //   { name: "Contact", path: "/contact" },
  // ];
  // const navigation = list.map((item) => (
  //   <li className="menu_item" key={item.name}>
  //     <Link to={item.path} exact={item.exact ? item.exact : false}>
  //       {item.name}
  //     </Link>
  //   </li>
  // ));

  return (
    <header className="header">
      <div className="title">
        <span className="title_name">
          <Link to="/">Mateusz Kotwiński</Link>
        </span>
        <span className="title_subtitle">Full Stack developer</span>
        <div className="title_hamburger" onClick={handleMenuClick}>
          <div
            className={`hamburger_line hamburger_top${
              openMenu ? "--open" : ""
            }`}
          ></div>
          <div
            className={`hamburger_line hamburger_middle${
              openMenu ? "--open" : ""
            }`}
          ></div>
          <div
            className={`hamburger_line hamburger_bottom${
              openMenu ? "--open" : ""
            }`}
          ></div>
        </div>
        <div className="title_social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Kotwin98"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mateusz-kotwi%C5%84ski/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:mkotwinski98@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <nav className={`menu${openMenu ? " menu--open" : ""}`}>
        <ul className="menu_list">
          <li className="menu_item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu_item">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="menu_item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="menu_item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
