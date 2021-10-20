import React, { Component } from 'react'
import { Row,Col,Container,Image } from 'react-bootstrap'
import img1 from 'images/AboutUs/Aboutus.png'

export default class Aboutus extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className="about">
                        <Row>
                            <Col xs={12} sm={4} md={6}>
                                <div className="about-img ">np
                                    <Image src={img1} roundedCircle />
                                    <div className="text-center About-name">
                                    <h6 className="about-name">Krozo Plakson</h6>
                                    <p className="about-sub-name">Ux/Ui Designer</p>
                                    </div>
                                </div>

                            </Col>
                            <Col xs={12} sm={4} md={6}>
                                <div className="about-content">
                                    <h1 className="about-title">About Us</h1>
                                    <p className="about-subtitle">
                                        It is a long established fact that a reader will be distracted by the eadable content of<br />
                                        a page when looking at its layout. The point of using Lorem Ipsum th that it has a<br />
                                        ore-or-less normal distributi.</p>

                                    <p className="about-subtitle">content here', making it look like readable English. Many desktop publishing packages<br />
                                        and web page editors now use Lorem Ipsum as their default model text, and a search for <br />
                                        'lorem ipsum' will uncover many web sites still in their infancy. Various versions have <br />
                                        evolved over the years, sometimes by accident
                                    </p>
                                </div>
                                <div className="about-psl-info">
                                    <h1 className="about-sub-info">Personal Info</h1>
                                    <Row>
                                        <Col className="text-start">
                                            <h1 className="personal-name">name</h1>
                                            <h1 className="personal-name">Age</h1>
                                            <h1 className="personal-name">Nationality</h1>
                                            <h1 className="personal-name">Freelance</h1>
                                        </Col>
                                        <Col>
                                            <h1 className="personal-name">Address</h1>
                                            <h1 className="personal-name">Phone</h1>
                                            <h1 className="personal-name">Skype</h1>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </>
        )
    }
}
