import './About.css';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import js from '../../images/languages/js.png';
import cpp from '../../images/languages/cpp.png';
import css from '../../images/languages/css.png';
import html from '../../images/languages/html.png';
import My_Resume from '../../images/My_Resume.pdf';
import react from '../../images/languages/react.png';
import python from '../../images/languages/python.png';
import angular from '../../images/languages/angular.png';
import { useStateValue } from '../Context/StateProvider';
import bootstrap from '../../images/languages/bootstrap.png';

function About() {

  // Dark Mode
  const [{ mode }] = useStateValue();
  const dark = {
    color: '#DFF6FF',
    backgroundColor: '#06283D'
  };
  const light = {
    color: 'black',
    backgroundColor: "rgb(241, 241, 241)"
  };

  return (
    <>
      <div className="banner">
        <div className="parallax_about"></div>
        <div className="about_banner_text">
          <p>ABOUT ME</p>
        </div>
      </div>
      <div className="about_main" id='about' style={mode === true ? dark : light}>
        <p>About Me</p>
        <div className="about_text">
          <p>
            I am a Front-End Developer. My first working experience was of a mechanical engineer, I enjoyed that and learnt a lot. But because of my increasing interest in creating and designing the web, I decided to switch my working from mechanical to web developing and to achieve that I improved my techanical skills and learnt some programming languages <strong>=&#62;</strong> <br /> HTML, CSS, JavaScript, REACT.JS, ANGULAR, C++, PYTHON, BOOTSTRAP <br /> and started my new journey as a front-end web developer.
          </p>
          <Button className='my-3' variant={mode === true ? "warning" : "info"} href={My_Resume} download>Download Resume</Button>
        </div>
        <marquee behavior="scroll" direction="left" scrollamount="4" loop="infinite">
          <Row>
            <Col><span></span></Col>
            <Col><img src={angular} alt="angular-icon" /></Col>
            <Col><span></span></Col>
            <Col><img src={css} alt="css-icon" /></Col>
            <Col><span></span></Col>
            <Col><img src={python} alt="python-icon" /></Col>
          </Row>
          <Row>
            <Col><img src={react} alt="react-icon" /></Col>
            <Col><span></span></Col>
            <Col><img src={js} alt="js-icon" /></Col>
            <Col><span></span></Col>
            <Col><span></span></Col>
            <Col><img src={bootstrap} alt="bootstrap-icon" /></Col>
            <Col><span></span></Col>
          </Row>
          <Row>
            <Col><img src={html} alt="html-icon" /></Col>
            <Col><img src={cpp} alt="cpp-icon" /></Col>
          </Row>
        </marquee>
      </div>
    </>
  );
}

export default About;
