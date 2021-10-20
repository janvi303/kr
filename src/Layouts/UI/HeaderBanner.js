import React, { Component } from 'react'

import img1 from 'images/HeaderImage/headerImg.png';
// import { Container } from 'react-bootstrap';

export default class HeaderBanner extends Component {
    render() {
        return (
            <>    
               <div className=" bann cless">
                    <div className="beffect">
                        <a to="#" className="beff_a ">
                            <div className="bg-img">
                                <img src={img1} className=" img-fluid  mx-auto width: 100% \9" atl="header-img"></img>
                            </div>
                        </a>
                        <div className="img-bnr-text text-banner">
                            <div>
                                <h5>App Devloper</h5>
                                <h1>Krozo Plakson</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod<br/> 
                                    tempor incididunt ut dolor the sit amet consectetur adipisicing <br/>
                                    elit sed do consectetur labore et dolo...</p>
                                <a to="#" className=" btn-primary">
                                    VIEW MORE
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
            </>
        )
    }
}
