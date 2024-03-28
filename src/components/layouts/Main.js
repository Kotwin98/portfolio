import React from "react";
import { Routes, Route } from "react-router-dom";
//animations
import { CSSTransition, TransitionGroup } from "react-transition-group";
//pages
import HomePage from "../pages/HomePage";
import SkillsPage from "../pages/SkillsPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

import "../../styles/layouts/Main.scss";
import "../../styles/animation/PageTransition.scss";

const Main = () => {
  // const { location } = this.props;

  return (
    <TransitionGroup component="main" className="main">
      <CSSTransition
        // key={location.key}
        timeout={{ enter: 800, exit: 400 }}
        classNames="fade"
        mountOnEnter={false}
        unmountOnExit={true}
      >
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Main;
