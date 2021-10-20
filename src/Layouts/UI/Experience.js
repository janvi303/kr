import React, { Component } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'

export default class Experience extends Component {
    render() {
        return (
            <>
                <div>
                
                    <div className="exp py-5">
                        <h1 className="text-center pd-5 experience-title">Experience</h1>
                    </div>
                    <Container fluid="md">
                        <Row xs={1} md={2} className="g-4">
                            <Col>
                            <div className="exp-card">
                                <Card>
                                    <Card.Body className="exp-body">
                                        <Card.Title className="exp-title-head">
                                            <h1 className="exp-title">Visual Designer</h1>
                                            <h6 className="exp-date">date</h6>
                                        </Card.Title>
                                        <Card.Text className="exp-text">
                                            This is a longer card with supporting text below as a natural<br/>
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            </Col>
                            <Col>
                            <div className="exp-card">
                                <Card>
                                    <Card.Body className="exp-body">
                                        <Card.Title className="exp-title">Graphic Designer</Card.Title>
                                        <Card.Text className="exp-text">
                                            This is a longer card with supporting text below as a natural<br/>
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            </Col>
                        </Row>
                        <Row xs={1} md={2} className="g-4">
                            <Col>
                            <div className="exp-card">
                                <Card>
                                    <Card.Body className="exp-body">
                                        <Card.Title className="exp-title">Web Developer</Card.Title>
                                        <Card.Text className="exp-text">
                                            This is a longer card with supporting text below as a natural<br/>
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </div>
                            </Col>
                            <Col>
                            <div className="exp-card">
                                <Card>
                                    <Card.Body className="exp-body">
                                        <Card.Title className="exp-title">Web Developer</Card.Title>
                                        <Card.Text className="exp-text">
                                            This is a longer card with supporting text below as a natural<br/>
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            </Col>     
                        </Row>
                        </Container>
                </div>
            </>
        )
    }
}
