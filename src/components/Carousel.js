import React from "react";
import { Carousel } from "react-responsive-carousel";
import './Carousel.css';

export default  (props) => (<div className="carousel">
  <Carousel autoPlay >
    <div>
      <img className="carousel-pic" alt="" src={props.PhotoSrc1} />
      
    </div>
    <div>
      <img alt="" src={props.PhotoSrc2} />
      
    </div>
    <div>
      <img alt="" src={props.PhotoSrc3} />
      
    </div>
    <div>
      <img alt="" src={props.PhotoSrc4} />
     
    </div>
    <div>
      <img alt="" src={props.PhotoSrc5} />
      
    </div>
    <div>
      <img alt="" src={props.PhotoSrc6} />
      
    </div>
    <div>
      <img alt="" src={props.PhotoSrc7} />
      
    </div>
    <div>
      <img alt="" src={props.PhotoSrc8} />
      
    </div>
  </Carousel></div>
);
