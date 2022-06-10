import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <Row className="mb-5 mt-3">
                <Col lg='8'>
                    <h1 className='display-4 mb-4'>
                        Contact Me
                    </h1>
                </Col>
            </Row>
            <Row className="sec_sp contact-1">
                <Col lg='5' className="mb-5">
                    <h3 className='color_sec py-4'>Get In touch</h3>
                    <address>
                        <strong>Email: hadiuzzaman527@gmail.com</strong>
                        <br />
                        <br />
                        <p>
                            <strong>Phone: +8801799199335</strong>
                        </p>
                    </address>
                    <p></p>
                </Col>
                <Col lg='7' className='d-flex align-items-center'>
                <form className='contact_form w-100'>
                        <Row className='mb-2'>
                            <Col lg='6' className='form-group'>
                                <input
                                    className='form-control mb-2'
                                    id='name'
                                    name='name'
                                    placeholder='Name'
                                    type='text'
                                    />
                            </Col>
                            <Col lg='6' className='form-group'>
                                <input
                                    className='form-control rounded-0'
                                    id='email'
                                    name='email'
                                    placeholder='Email'
                                    type='email'
                                    />
                            </Col>
                        </Row>
                        <textarea className='form-control rounded-0'
                        id='message'
                        name='message'
                        placeholder='Message'
                        rows='5'
                        ></textarea>
                        <br/>
                        <Row>
                            <Col lg='12' className='form-group'>
                                <button className='primary-btn3 primary-btn4 mb-4' type="submit">Send</button>
                                
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;