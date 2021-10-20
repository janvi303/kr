import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import F from 'images/CustomerReview/F.png'
export class CustomerReview extends Component {
    render() {
        return (
            <div className="container">
                <div className=" textblock">
                 <Carousel
                  autoPlay={true}>
            <Carousel.Item 
            interval={1000}>
            <Row>
                <Col xs={2}>
                  <img className="img-fluid mx-auto img-circle" src={F} />
                </Col>

                <Col className="customerP">
                  <p>Sed elit quam, iaculis sed semper sit amet udin vittheae nibi at magna akal semperFusce commodo molestie  elit quam, iaculis sed sempsum Dolort tusima olatiup udin vitae magna semperFusceSed elit quam, iaculis sed semper udin vitae nibh. at magna akal semperFusce.</p>
                  <div className="d-inline-block">
                    <span className="customerspan1" >Mr.John Doe  </span>
                    <span className="customerspan2"> - Designer</span>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <Row>
                <Col xs={2}>
                  <img src={F} />
                </Col>

                <Col className="customerP">
                  <p>Sed elit quam, iaculis sed semper sit amet udin vittheae nibi at magna akal semperFusce commodo molestie  elit quam, iaculis sed sempsum Dolort tusima olatiup udin vitae magna semperFusceSed elit quam, iaculis sed semper udin vitae nibh. at magna akal semperFusce.</p>
                  <div className="d-inline-block">
                    <span className="customerspan1" >Mr.John Doe  </span>
                    <span className="customerspan2"> - Designer</span>
                  </div>
                </Col>
              </Row>


            </Carousel.Item>
            <Carousel.Item>
            <Row>
                <Col xs={2}>
                  <img src={F} />
                </Col>

                <Col className="customerP">
                  <p>Sed elit quam, iaculis sed semper sit amet udin vittheae nibi at magna akal semperFusce commodo molestie  elit quam, iaculis sed sempsum Dolort tusima olatiup udin vitae magna semperFusceSed elit quam, iaculis sed semper udin vitae nibh. at magna akal semperFusce.</p>
                  <div className="d-inline-block">
                    <span className="customerspan1" >Mr.John Doe  </span>
                    <span className="customerspan2"> - Designer</span>
                  </div>
                </Col>
              </Row>


            </Carousel.Item>
          </Carousel>
         
         </div>
            </div>
        )
    }
}

export default CustomerReview
