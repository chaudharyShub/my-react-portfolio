import React from 'react';
import './ContactItem.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useStateValue } from '../Context/StateProvider';

function ContactItem({ title, logo, desc, href }) {

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
        <Card className="contactItem_main" style={mode === true ? dark : light}>
            <Card.Img variant="top" src={logo} style={{ width: '30px' }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Button variant="primary" target='_blank' href={href}>Send message</Button>
            </Card.Body>
        </Card>
    );
}

export default ContactItem;
