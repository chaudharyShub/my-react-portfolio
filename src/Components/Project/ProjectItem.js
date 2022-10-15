import React from 'react';
import './ProjectItem.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useStateValue } from '../Context/StateProvider';

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
    <div className="my-3">
      <Card className="projectItem_main" style={mode === true ? dark : light}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text> {desc} </Card.Text>
          <Card.Text><strong>Tech. Stack:</strong> {tech_stack} </Card.Text>
          <Button variant="dark" disabled={true ? href === "disabled" : false} href={href} target="_blank">View Live &#8599;</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectItem;
