import React, { Component } from 'react'
import { Row,Col,Card,Container } from 'react-bootstrap'
// import img1 from 'images/AboutUs/Aboutus.png'
import { FaDesktop } from "react-icons/fa"
// import s1 from 'images/Service/1.jpg'
// import s2 from 'images/Service/2.jpg'
// import s3 from 'images/Service/3.jpg'
// import s4 from 'images/Service/4.jpg'
// import s5 from 'images/Service/5.jpg'
// import s6 from 'images/Service/6.jpg'


export default class Service extends Component {
    render() {
        return (
            <>
            <div className="main-service">
            <Container>
                <div className="service  ">
                        <h1 className="text-center service-title">My Services</h1>
                        <Row xs={1} md={3} className="g-4">
                        <Col className="lg-4 md-4">
                                <Card className="service-card" >
                                    <Card.Body>
                                        <Card.Title> 
                                            {/* <img alt="serviceImage" src={}/> */}
                                        </Card.Title>
                                        <Card.Subtitle className="cardtitle">Web Devlopment</Card.Subtitle>
                                        <Card.Text className="service-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="service-card" >
                                    <Card.Body>
                                        <Card.Title> 
                                            {/* <img alt="serviceImage" src={s4}/> */}
                                        </Card.Title>
                                        <Card.Subtitle className="cardtitle">Web Design</Card.Subtitle>
                                        <Card.Text className="service-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="lg-4 md-4">
                            <Card className="service-card" >
                                    <Card.Body>
                                        <Card.Title> 
                                            {/* <img alt="serviceImage" src={s2}/> */}
                                        </Card.Title>
                                        <Card.Subtitle className="cardtitle">Graphic Design</Card.Subtitle>
                                        <Card.Text className="service-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="service-card" >
                                    <Card.Body>
                                        <Card.Title> 
                                            {/* <img alt="serviceImage" src={s5}/> */}
                                        </Card.Title>
                                        <Card.Subtitle className="cardtitle">Mobile apps</Card.Subtitle>
                                        <Card.Text className="service-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="lg-4 md-4">
                            <Card className="service-card" >
                                    <Card.Body>
                                        <Card.Title> 
                                            {/* <img alt="serviceImage" src={s3}/> */}
                                        </Card.Title>
                                        <Card.Subtitle className="cardtitle">SEO Marketing</Card.Subtitle>
                                        <Card.Text className="service-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="service-card" >
                                    <Card.Body>
                                        <Card.Title> 
                                            {/* <img alt="serviceImage" src={s6}/> */}
                                        </Card.Title>
                                        <Card.Subtitle className="cardtitle">Web Banner</Card.Subtitle>
                                        <Card.Text className="service-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            </Row>
                    
                </div>
                </Container>
                </div>
            </>
        )
    }
}
