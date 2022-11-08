import { useStateValue } from '../Context/StateProvider';
import WorkExperience from '../WorkExperience/WorkExperience';
import './About.css';
import js from '../../images/languages/js.png';
import cpp from '../../images/languages/cpp.png';
import css from '../../images/languages/css.png';
import html from '../../images/languages/html.png';
import My_Resume from '../../images/My_Resume.pdf';
import react from '../../images/languages/react.png';
import python from '../../images/languages/python.png';
import angular from '../../images/languages/angular.png';
import tailwind from '../../images/languages/tailwind.svg';

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
  const btnStyleDark = {
    backgroundColor: '#ffc107',
    border: '2px solid #ffc107'
  };

  const rightMarqueeContent = [js, cpp, css, html, react, python, angular, tailwind, js, cpp, css];

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
        <div className='about_left_right_parent'>
          <div className='about_left_container'>
            <div className="about_text">
              <p className='paragraph_text'>
                I am a Front-End Developer. My first working experience was of a mechanical engineer, I enjoyed that and learnt a lot. But because of my increasing interest in creating and designing the web, I decided to switch my career from mechanical to web development and to achieve that I improved my techanical skills and learnt some programming languages <strong>=&#62;</strong> <span>HTML, CSS, JavaScript, REACT.JS, ANGULAR, C++, PYTHON, TAILWIND</span> and started my new journey as a front-end web developer.
              </p>
              <div className='download_button'>
                <a className='inner_button' style={mode === true ? btnStyleDark : {}} href={My_Resume} download>Download Resume</a>
              </div>
            </div>
          </div>
          <div className='about_right_container'>
            <div className='about_work_experience'>
              <WorkExperience />
            </div>
          </div>
        </div>
        <div className='marquee'>
          <ul className='marquee_content_left'>
            {
              rightMarqueeContent.map((element, index) =>
                <li key={index}>
                  <img className='companyLogo' src={element} />
                </li>)
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
