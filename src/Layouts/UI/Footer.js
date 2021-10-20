import { Component } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import { BsTelephone } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
export default class Footer extends Component {
    render() {
        return (
          <>
          <footer className="footer">
            <div className="footer-head">
              <Container>
                <div className="py-5 text-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                    width="100% auto"
                    height="350px"
                    frameBorder="0"
                    // style={{ border: 0 }}
                    // allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  />
                </div>

                <Row>
                  <Col>
                    <div className="f-left">
                      <div className="f-content">
                      <h1 className="F-contact">Contact Us</h1>
                      <h1 className="f-text">Let's Discuss Your project</h1>
                      </div>
                    <div className="">
                      <h6 className="f-icon">
                        <i>
                          <BsTelephone size={20} />
                        </i>
                        <span>258-963-1472</span>
                      </h6>
                      <h6 className="f-icon">
                        <i>
                          <BsEnvelope size={20}  />
                        </i>
                        <span>Plakson@gmail.com</span>
                      </h6>
                      <h6 className="f-icon">
                        <i>
                          <BiMap  size={20} />
                        </i>
                        <span>
                          7918 State Rd43 N, Battle Ground,<br/>
                        </span>
                        <br/>
                        <span>
                              IN ,47920 Califronia,USA
                        </span>
                      </h6>
                    </div>
                  </div>
                  </Col>
                  <Col className="f-end">
                    <Row  className="box" Ex={2} >
                      <Col>
                        <input
                          className="inputbox"
                          type="text"
                          placeholder="Your name"
                        />
                      </Col>
                      <Col>
                        <input
                          className="inputbox"
                          type="email"
                          placeholder="Email"
                        />
                      </Col>
                      <Col>
                        <input
                          className="inputbox"
                          type="email"
                          placeholder="Phone"
                        />
                      </Col>
                      <Col>
                        <input
                          className="inputbox"
                          type="email"
                          placeholder="Subject"
                        />
                      </Col>
                    </Row>
                    <Col>
                      <input
                        className="inputboxmessage"
                        type="email"
                        placeholder="Message"
                      />
                    </Col>
                    <div className="btn"> 
                      <button className="send-btn"><span>Send Message</span></button>
                    </div>
                  </Col>
                  
                </Row>
              </Container>
              
            </div>
          </footer>
          <div className="f-link">Copyright © 2021. All Rights Reserved.</div>
        </>
        );
    }
}