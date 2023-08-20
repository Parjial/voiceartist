import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.jpeg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ContactUs = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');

  const sendEmail = (e) => {
    e.preventDefault();
  
    const firstName = form.current.elements['user_name'].value;
    const lastName = form.current.elements['last_name'].value;
    const email = form.current.elements['user_email'].value;
    const phoneNo = form.current.elements['phone_no'].value;
    const message = form.current.elements['message'].value;
  
    if (!firstName || !lastName || !email || !phoneNo || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    setButtonText('Sending');
  
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setButtonText('Sent Successfully');
        form.current.elements['user_name'].value = '';
        form.current.elements['last_name'].value = '';
        form.current.elements['user_email'].value = '';
        form.current.elements['phone_no'].value = '';
        form.current.elements['message'].value = '';
      }, (error) => {
        console.log(error.text);
        setButtonText('Failed to Send');
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? 'animate__animated animate__zoomIn' : ''} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        First Name
                        <input type="text" name='user_name' required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        Last Name
                        <input type="text" name='last_name' required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        E-mail
                        <input type="email" name='user_email' required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        Contact
                        <input type="tel" name='phone_no' required />
                      </Col>
                      <Col size={12} className="px-1">
                        Message
                        <textarea rows="6" name="message" required></textarea>
                        <input type="submit" value={buttonText}></input>
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
