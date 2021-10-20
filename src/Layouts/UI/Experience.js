import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default class Experience extends Component {
    render() {
        return (
            <>
                <div>

                    <div className="exp ">
                        <h1 className="text-center experience-title">Experience</h1>
                    </div>
                    <Container >
                        <Row xs={1} md={2} >
                            <Col>
                                <div className="exp-card">
                                    <Card>
                                        <Card.Body className="exp-body">
                                            <Card.Title className="exp-title">Visual Designer
                                                <p>
                                                    2017-2018 | Full Time | InHouse
                                                </p>
                                            </Card.Title>
                                            <hr/>
                                            <Card.Text className="exp-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut dolor sit amet consectetur adipisicing elit sed do  labore et dolo...
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col>
                                <div className="exp-card">
                                <Card>
                                        <Card.Body className="exp-body">
                                            <Card.Title className="exp-title">Visual Designer
                                                <p>
                                                    2017-2018 | Full Time | InHouse
                                                </p>
                                            </Card.Title>
                                            <hr/>
                                            <Card.Text className="exp-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut dolor sit amet consectetur adipisicing elit sed do  labore et dolo...
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                        <Row xs={1} md={2} >
                            <Col>
                                <div className="exp-card">
                                <Card>
                                        <Card.Body className="exp-body">
                                            <Card.Title className="exp-title">Visual Designer
                                                <p>
                                                    2017-2018 | Full Time | InHouse
                                                </p>
                                            </Card.Title>
                                            <hr/>
                                            <Card.Text className="exp-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut dolor sit amet consectetur adipisicing elit sed do  labore et dolo...
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col>
                                <div className="exp-card">
                                <Card>
                                        <Card.Body className="exp-body">
                                            <Card.Title className="exp-title">Visual Designer
                                                <p>
                                                    2017-2018 | Full Time | InHouse
                                                </p>
                                            </Card.Title>
                                            <hr/>
                                            <Card.Text className="exp-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut dolor sit amet consectetur adipisicing elit sed do  labore et dolo...
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
