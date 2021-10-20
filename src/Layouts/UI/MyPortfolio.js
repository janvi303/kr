import React, { Component } from 'react'
import img1 from 'images/prof/Img1.jpg'
import img2 from 'images/prof/Img2.jpg'
import img3 from 'images/prof/Img3.jpg'
import img4 from 'images/prof/Img4.jpg'
import img5 from 'images/prof/Img5.jpg'
import img6 from 'images/prof/Img6.jpg'


export class MyPortfolio extends Component {
    render() {
        return (
            <div>
                <div class="container ">
          <div class="row masonry-grid">
            <div class="col-md-6 col-lg-4 masonry-column">
              <div>
                <a href="" class="thumbnail"><img src={img1} /></a>
              </div>
              <div>
                <a href="" class="thumbnail"><img src={img4} /></a>
              </div>

            </div> 
            <div class="col-md-6 col-lg-4 masonry-column">
              <div>
                <a href="" class="thumbnail"><img src={img2} /></a>
              </div>
              <div>
                <a href="" class="thumbnail"><img src={img5} /></a>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 masonry-column">
              <div>
                <a href="" class="thumbnail"><img src={img3} /></a>
              </div>
              <div>
                <a href="" class="thumbnail"><img src={img6} /></a>
              </div>
            </div>

          </div>
          </div>
            </div>
        )
    }
}

export default MyPortfolio
