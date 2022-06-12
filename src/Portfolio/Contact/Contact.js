import React, { useRef, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const Contact = () => {
    const form = useRef();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const sendEmail = (e) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setMessage('');
        emailjs.sendForm('service_3s2yuvg', 'template_hilnpyk', form.current, 'hIkxuxHMLHtquZL-x')
            .then((result) => {
                if(result){
                    console.log('sent');
                    toast.success("Message is Sent!");
                }
                else{
                    toast.error("Message does not sent!");
                }
            });
    };
    return (

        <Container>
            <Row className="mb-5 mt-5">
                <Col lg='12'>
                    <h2 className='mb-4 text-center uppercase'>
                        CONTACT ME
                    </h2>
                </Col>
            </Row>
            <Row className="sec_sp contact-1">
                <Col lg='5' className="">
                    <h3 className='color_sec'>Get In touch</h3>
                    <address>
                        <p>
                            <strong>Email: hadiuzzaman527@gmail.com</strong>
                        </p>
                        <p>
                            <strong>Phone: +8801799199335</strong>
                        </p>
                        <p>
                            <strong>Address: Mirpur-12,Dhaka-1216,Bangladesh</strong>
                        </p>
                    </address>
                    <p></p>
                </Col>
                <Col lg='7' className='d-flex align-items-center'>
                    <form ref={form} onSubmit={sendEmail} className='contact_form w-100'>
                        <Row className='mb-2'>
                            <Col lg='6' className='form-group'>
                                <input
                                    className='form-control mb-2'
                                    id='name'
                                    type="text"
                                    name="user_name"
                                    placeholder='Name'
                                    onChange={event => setFirstName(event.target.value)}
                                    value={firstName}
                                />
                            </Col>
                            <Col lg='6' className='form-group'>
                                <input
                                    className='form-control rounded-0'
                                    id='email'
                                    type="email" 
                                    name="user_email"
                                    placeholder='Email'
                                    onChange={event => setLastName(event.target.value)}
                                    value={lastName}
                                />
                            </Col>
                        </Row>
                        <textarea className='form-control rounded-0'
                            id='message'
                            name="message"
                            placeholder='Message'
                            onChange={event => setMessage(event.target.value)}
                            value={message}
                            rows='5'
                        ></textarea>
                        <br />
                        <Row>
                            <Col lg='12' className='form-group'>
                                <button className='primary-btn3 primary-btn4 mb-4 fs-6 rounded' type="submit" value="Send">Send <RiSendPlaneFill className='ms-2 send' /></button>

                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
           <ToastContainer/>
        </Container>

    );
};

export default Contact;