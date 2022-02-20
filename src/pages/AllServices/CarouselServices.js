import React from "react";
import './allservices.css'
import Carousel from 'react-bootstrap/Carousel'
import dron from './cars.jfif'
import ipad from './mid.jpg'

export default function CarouselService(){
    return(
        <Carousel fade>
            <Carousel.Item>
                <div className="service-img">
                    <img src={dron}/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="service-img">
                    <img src={ipad}/>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}