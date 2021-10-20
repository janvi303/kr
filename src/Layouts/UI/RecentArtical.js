import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import R2 from 'images/RecentArtical/R2.png'
import R3 from 'images/RecentArtical/R3.png'


export class RecentArtical extends Component {
    render() {
        return (
            <div>
                <div className="container ">
                    <Row>
                        <Col xs={6} className="recent">
                            <img  className="img-fluid mx-auto" alt="footer1" src={R3} />
                            <div class="textblock1 text-center">
                                <p>12/AUG/2020 - BY ADMIN</p>
                                <h1>   They Now Bade Farewell To The Kind But Unseen People...   </h1>

                            </div>
                        </Col>
                        <Col xs={6}>
                            <img className="img-fluid mx-auto" alt="footer1" src={R2} />
                            <div class="textblock1 text-center">
                                <p>12/AUG/2020 - BY ADMIN</p>
                                <h1>   They Now Bade Farewell To The Kind But Unseen People...   </h1>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default RecentArtical
