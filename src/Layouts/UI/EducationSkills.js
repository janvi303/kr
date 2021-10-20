import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

export default class EducationSkills extends Component {
    render() {
        return (
            <>
                <div className="Education">
                    <h1 className="text-center  Education-title">Education & Skills</h1>
                </div>
                <div>
                    <Container>
                        <Row >
                            <Col xs={6} md={4} >
                                <div className="education-box">
                                    <div className="educontain">
                                        <h6>2010-2012</h6>
                                        <h2>
                                            Front-end Engineer
                                        </h2>
                                        <h3>
                                            International Design Institute
                                        </h3>
                                    </div>
                                    <hr />
                                    <div className="educontain">
                                        <h6>2013-2014</h6>
                                        <h2>
                                            Graphic Designer
                                        </h2>
                                        <h3>
                                            HRK Design Institute
                                        </h3>
                                    </div>
                                    <hr />
                                    <div className="educontain">
                                        <h6>2015-2016</h6>
                                        <h2>
                                            Visual Designer
                                        </h2>
                                        <h3>
                                            HRK Design Institute
                                        </h3>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className="skill-bar">
                                    <Row>1
                                        <Col>
                                            <div className="bar">
                                                <div className="info">
                                                    <span>
                                                        HTML
                                                    </span>
                                                </div>

                                                <div className="progress-line html">
                                                    <span></span>
                                                </div>

                                            </div>
                                        </Col>
                                    </Row>  
                                    
                                </div>
                                <div className="skill-bar">
                                    <div className="bar">
                                        <div className="info">
                                            <span>
                                                React js
                                            </span>
                                        </div>
                                        <div className="progress-line reactjs ">
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar">
                                        <div className="info">
                                            <span>
                                                Wordpress
                                            </span>
                                        </div>
                                        <div className="progress-line wordpress">
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar">
                                        <div className="info">
                                            <span>
                                                UI/UX
                                            </span>
                                        </div>
                                        <div className="progress-line ui-ux">
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar">
                                        <div className="info">
                                            <span>
                                                Css3
                                            </span>
                                        </div>
                                        <div className="progress-line css3">
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
