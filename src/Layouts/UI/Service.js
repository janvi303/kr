import React, { Component } from 'react'
import { Row,Col,Card,Container } from 'react-bootstrap'
// import img1 from 'images/AboutUs/Aboutus.png'
import { FaDesktop } from "react-icons/fa"

export default class Service extends Component {
    render() {
        return (
            <>
            <div className="main-service">
            <Container>
                <div className="service py-5">
                        <h1 className="text-center pd-5 service-title">My Services</h1>
                        <Row xs={1} md={3} className="g-4">
                            <Col className="lg-4 sm-4 ">
                                <Card className="service-card" >
                                    <Card.Body>
                                        <Card.Title className="service-icon"> <i><FaDesktop/></i></Card.Title>
                                        <Card.Subtitle className="mb-2 service-subtitle">Web Devlopment</Card.Subtitle>
                                        <Card.Text className="service-text">
                                            Some quick example text to build on the card <br/>
                                            title and make up the bulk of<br/>
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="service-card">
                                    <Card.Body>
                                        <Card.Title> <i><FaDesktop/></i></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Web Devlopment</Card.Subtitle>
                                        <Card.Text className="service-text">
                                            Some quick example text to build on the card <br/>
                                            title and make up the bulk of<br/>
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="lg-4 md-4">
                                <Card className="service-card" >
                                    <Card.Body>
                                        <Card.Title> <i><FaDesktop/></i></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Web Devlopment</Card.Subtitle>
                                        <Card.Text className="service-text">
                                            Some quick example text to build on the card<br/> 
                                            title and make up the bulk of<br/>
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="service-card">
                                    <Card.Body>
                                        <Card.Title> <i><FaDesktop/></i></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Web Devlopment</Card.Subtitle>
                                        <Card.Text className="service-text">
                                            Some quick example text to build on the card <br/>
                                            title and make up the bulk of<br/>
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="lg-4 md-4">
                                <Card className="service-card" >
                                    <Card.Body>
                                        <Card.Title> <i><FaDesktop/></i></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Web Devlopment</Card.Subtitle>
                                        <Card.Text className="service-text">
                                            Some quick example text to build on the card <br/>
                                            title and make up the bulk of<br/>
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="service-card">
                                    <Card.Body>
                                        <Card.Title> <i><FaDesktop/></i></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Web Devlopment</Card.Subtitle>
                                        <Card.Text className="service-text">
                                            Some quick example text to build on the card <br/>
                                            title and make up the bulk of<br/>
                                            the card's content.
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
