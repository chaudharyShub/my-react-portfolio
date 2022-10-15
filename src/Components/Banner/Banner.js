import './Banner.css';
import React from 'react';
import intro_video from '../../images/intro_video.mp4';

function Banner() {

  const screenWidth = window.screen.width;
  if (screenWidth < 700) {
    return (
      <div className='banner'>
        <video autoPlay loop muted>
          <source src={intro_video} type="video/mp4" />
        </video>
        <div className="banner_text">
          <p>Shubham Chaudhary</p>
          <p>Front-End Developer</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='banner'>
        <div className="parallax_banner"></div>
        <div className="banner_text">
          <p>Shubham Chaudhary</p>
          <p>Front-End Developer</p>
        </div>
      </div>
    );
  }
}

export default Banner;
