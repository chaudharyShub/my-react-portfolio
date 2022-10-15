import './Home.css';
import React from 'react';
import { Link } from 'react-scroll';
import Banner from '../Banner/Banner';
import arrow from '../../images/arrow.png';
import { useStateValue } from '../Context/StateProvider';

function Home() {

  // Dark Mode 
  const [{ mode }] = useStateValue();
  const dark = {
    color: '#DFF6FF',
    backgroundColor: '#06283D',
    border: '1px solid #06283D'
  };
  const light = {};

  return (
    <div id='home'>
      <Banner />
      <div className='home_main' style={mode === true ? dark : light}>
        <div className="welcome_text">
          <p>Welcome to my Portfolio...</p>
        </div>
        <div className="lower_title" style={mode === true ? { 'filter': 'invert(100%)' } : { 'filter': 'none' }}>
          <Link to="about" spy={true} smooth={true} duration={0}><img src={arrow} alt="down->arrow" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
