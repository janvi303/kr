import React, { Component } from 'react'
import { Row,Col, Container } from 'react-bootstrap'

export default class EducationSkills extends Component {
    render() {
        return (
            <>
                <div className="Education">
                    <h1 className="text-center pd-5 Education-title">Education & Skills</h1>   
                </div>
                <div>
                    <Container>
                    <Row xs="2">
                        <Col >
                        <div className="education-box">
                            <ul className="list-unstyled slider-left">
                                <li>
                                    <p className="date">2010-2012</p>
                                    <h5>Front-end-Engineer</h5>
                                    <p className="title">International Desgin institute</p>
                                </li>
                                <li>
                                    <p className="date">2010-2012</p>
                                    <h5>Graphic Designer</h5>
                                    <p className="title">International Desgin institute</p>
                                </li>
                                <li>
                                    <p className="date">2010-2012</p>
                                    <h5>Visual Designer</h5>
                                    <p className="title">International Desgin institute</p>
                                </li>
                            </ul>
                        </div>
                        </Col>
                        <Col>
                            <div className="skill-bar">
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
