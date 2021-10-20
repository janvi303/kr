import React, { Component } from 'react'
import img1 from 'images/prof/img1.jpg'
import img2 from 'images/prof/img2.jpg'
import img4 from 'images/prof/img3.jpg'
import img3 from 'images/prof/img4.jpg'
import img5 from 'images/prof/img5.jpg'
import img6 from 'images/prof/img6.jpg'
import { Container  ,Row ,Col} from 'react-bootstrap'




export class MyPortfolio extends Component {
    render() {
        return (
          <>
            <div className="protofolio">
              <div className="title">
                <h1 className="protfolio-title">My Portfolio</h1>
              </div>
              <div>
                <ul className="tab-pro text-center pro-menu">
                  <li>
                    <a herf="" data-toggle="tab"> All</a>
                  </li>
                  <li>
                    <a data-toggle="tab">Branding</a>
                  </li>
                  <li>
                    <a data-toggle="tab">Photoraghy</a>
                  </li>
                  <li>
                    <a data-toggle="tab">Fashion</a>
                  </li>
                  <li>
                    <a data-toggle="tab">Product</a>
                  </li>
                </ul>
              </div>
              <Container>
              <Row>
              <Col>
                <div className="img-set" >
                 <img src={img1} className="img-fluid mx-auto d-block" alt="pro-img" height={500} />
                 </div>
                <div className="img-set">
                <img src={img2}  className="img-fluid mx-auto d-block" alt="pro-img" />
                </div>

              </Col> 
            <Col >
              <div className="img-set">
                
                <img src={img4}  className="img-fluid mx-auto d-block" alt="pro-img" height={500} />
              </div>
              <div  className="img-set">
              <img src={img3} className="img-fluid mx-auto d-block"  alt="pro-img" />
              </div>
            </Col>
            <Col >
              <div className="img-set">
                <img src={img5}  className="img-fluid mx-auto d-block" alt="pro-img" height={500}/>
              </div>
              <div  className="img-set">
                <img src={img6}  className="img-fluid mx-auto d-block" alt="pro-img" />
              </div>
            </Col>

          </Row>
              </Container>
            </div>
          </>
        );
    }
}

export default MyPortfolio;
