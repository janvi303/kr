import React, { Component } from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import img1 from 'images/AboutUs/Aboutus.png'

export default class Aboutus extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className="about">
                        <Row>
                            <Col xs={6} md={5}>
                                <div className="about-img ">
                                    <Image className="d-block img-fluid mx-auto" src={img1} roundedCircle />
                                    <div className="text-center About-name">
                                        <h6 >Krozo Plakson</h6>
                                        <p >Ux/Ui Designer</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={7} className="abouttextbox">
                                <div>
                                    <h1 className="about-title">About Us</h1>
                                    <p className="about-subtitle">
                                        It is a long established fact that a reader will be distracted by the eadable content of
                                        a page when looking at its layout. The point of using Lorem Ipsum th that it has a
                                        ore-or-less normal distributi.</p>

                                    <p className="about-subtitle">content here', making it look like readable English. Many desktop publishing packages<br />
                                        and web page editors now use Lorem Ipsum as their default model text, and a search for
                                        'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                                        evolved over the years, sometimes by accident
                                    </p>

                                </div>
                                <div className="about-psl-info">
                                    <h1 className="about-sub-info">Personal Info</h1>
                                    <Row>
                                        <Col>
                                            <div>
                                                <span className="perName1" >Name : </span>
                                                <span className="perName2">Krozo Plakson</span>
                                            </div>
                                            
                                            <div>
                                                <span className="perName1" >Age : </span>
                                                <span className="perName2">24 Years</span>
                                            </div>
                                            <div>
                                                <span className="perName1" >Nationality : </span>
                                                <span className="perName2">USA</span>
                                            </div>
                                            <div>
                                                <span className="perName1" >Freelance : </span>
                                                <span className="perName2">Available</span>
                                            </div>

                                        </Col>
                                        <Col>
                                            <div className="d-inline-block personal-name">
                                                <span className="perName1" >Address : </span>
                                                <span className="perName2"> California, USA</span>
                                            </div>
                                            <div className="d-inline-block personal-name">
                                                <span className="perName1" >Phone : </span>
                                                <span className="perName2">258-963-1472</span>
                                            </div>
                                            <div className="d-inline-block personal-name">
                                                <span className="perName1" >Skype : </span>
                                                <span className="perName2">Krozoplakson22</span>
                                            </div>
                                            <div className="d-inline-block personal-name">
                                                <span className="perName1" >E-mail   : </span>
                                                <span className="perName2">Plakson@gmail.com</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col lg={4}>


                            </Col>

                        </Row>
                    </div>
                </Container>
            </>
        )
    }
}
