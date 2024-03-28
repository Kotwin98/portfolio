import React from "react";
import "../../styles/pages/HomePage.scss";
import { Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <section className="home">
      <Row>
        <Col md={8}>
          <span className="home_title">Hi!</span>
          <p className="home_text">
            My name is Mateusz Kotwiński. I'm a Full Stack Developer and I'm
            still learning every single day! Follow me on my socials and let's
            improve together!
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={10}>
          <span className="home_title">Learning</span>
          <p className="home_text">
            I started my coding career in 2018 from creating simple programs in
            c++ on YouTube. At the time it was just for fun but very quickly I
            got hooked. In 2019 I got into web development as it seems even more
            interesting for me.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <span className="home_title">Currently</span>
          <p className="home_text">
            Nowadays I am working for a tech company where I have lots of great
            opportunities to improve my skills.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default HomePage;
