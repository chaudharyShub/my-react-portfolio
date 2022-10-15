import './Footer.css';
import React, { useState } from 'react';
import { footerItems } from '../Details.js';
import { useStateValue } from '../Context/StateProvider';

function Footer() {

  // Dark Mode
  const [{ mode }] = useStateValue();
  const [hover, setHover] = useState(-1);

  const dark = {
    color: '#DFF6FF',
    backgroundColor: '#06283D'
  };
  const light = {
    color: 'black',
    backgroundColor: "rgb(241, 241, 241)",
  };
  const hoverEffectLight = {
    border: "2px solid black"
  };
  const borderLight = {
    border: '2px solid rgb(241, 241, 241)'
  };
  const hoverEffectDark = {
    border: "2px solid #06283D"
  };
  const borderDark = {
    border: '2px solid white'
  };
  // Dark Mode Ends
  return (
    <div className='footer_main' style={mode === true ? dark : light}>
      <div className="footer_link">
        {
          footerItems.map(element => (

            <div className="link"
              onMouseEnter={() => setHover(element.id)}
              onMouseLeave={() => setHover(-1)}

              style={
                mode === true
                  ? (hover === (element.id) ? borderDark : hoverEffectDark)
                  : (hover === (element.id) ? hoverEffectLight : borderLight)
              }
            >
              <a rel="noreferrer" target="_blank" href={element.href}>
                <img
                  src={element.src}
                  alt="social_media"
                  style={mode === true ? { 'filter': 'invert(100%)' } : { 'filter': 'none' }}
                />
                <p style={mode === true ? dark : light}>{element.name}</p>
              </a>
            </div>

          ))
        }
      </div>
      <div className="copyright">
        <p>Copyright © 2022 Shubham. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
