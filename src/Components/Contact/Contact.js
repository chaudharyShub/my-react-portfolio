import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactItem from './ContactItem';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { contactArray } from '../Details.js';
import { useStateValue } from '../Context/StateProvider';

function Contact() {

    // Email - form submission
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8akr5tv', 'template_e82dyaj', form.current, '7ARg-ncbFIkKGt125')
            .then(() => {
                alert('SUCCESS! Your form has been submitted.');
            });
        e.target.reset();
    }

    // Dark Mode
    const [{ mode }] = useStateValue();
    const dark = {
        color: '#DFF6FF',
        backgroundColor: '#06283D',
    };
    const light = {
        color: 'black',
        backgroundColor: "rgb(241, 241, 241)"
    };
    const formStyle = {
        color: '#06283D',
        backgroundColor: '#DFF6FF',
        boxShadow: 'none'
    };

    return (
        <>
            <div className="banner">
                <div className="parallax_contact"></div>
                <div className="contact_banner_text">
                    <p>CONTACT ME</p>
                </div>
            </div>
            <div id="contact" className='container__' style={mode === true ? dark : light}>
                <div className='contact_main'>
                    <p>Contact</p>
                    <div className="contact_items_parent">
                        {
                            contactArray.map(element => {
                                return <ContactItem
                                    key={element.title}
                                    title={element.title}
                                    logo={element.logo}
                                    desc={element.desc}
                                    href={element.href}
                                />
                            })
                        }
                    </div>
                </div>
                <Card className='form' style={mode === true ? formStyle : light}>
                    <Form onSubmit={sendEmail} ref={form}>
                        <h3>Send Email &darr;</h3>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name='name' placeholder="Enter your name" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" name='email' placeholder="Enter your email" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" rows={6} cols={23} type="text" name="message" placeholder="Enter message..." required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </div>
        </>
    );
}

export default Contact;
