import React from "react";
import './infoPage.css'
import Carousel from 'react-bootstrap/Carousel'
import dron from './cars.jfif'
import ipad from './mid.jpg'

export default function CarouselInfo(){
    return(
        <Carousel fade>
            <Carousel.Item>
                <div className="info-img">
                    <img src={dron}/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="info-img">
                    <img src={ipad}/>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}
