import React from "react";
import './allDetails.css'
import Carousel from 'react-bootstrap/Carousel'
import dron from './cars.jfif'
import ipad from './mid.jpg'

export default function CarouselDetail(){
    return(
        <Carousel fade>
            <Carousel.Item>
                <div className="detail-img">
                    <img src={dron}/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="detail-img">
                    <img src={ipad}/>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}