import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import './ProjectItem.css';

function ProjectItem({ img, title, desc, tech_stack, href }) {

  // Dark Mode 
  const [{ mode }] = useStateValue();
  const dark = {
    color: '#06283D',
    backgroundColor: '#DFF6FF',
    boxShadow: 'none'
  };
  const light = {
    color: 'black',
    backgroundColor: "rgb(241, 241, 241)"
  };

  return (
    <div className='projectItem_main' style={mode ? dark : light}>
      <div className="card_container">
        <img src={img} />
        <div className='card_text_container'>
          <h2>{title}</h2>
          <p className='paragraph_project'>{desc}</p>
          <div className="button_desc">
            <p>
              <strong>Tech. Stack:</strong> {tech_stack}
            </p>
            <a
              className={`btn ${mode ? 'btn-info' : 'btn-dark'}`}
              href={href}
              target="_blank"
            >View Live &#8599;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
