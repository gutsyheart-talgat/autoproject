import React from "react";
import './service.css'
import dron from './dron.png'
import { NavLink } from "react-router-dom";
import CarouselService from "./CarouselService";


export default function Services({main, setMain}){
    const services = [
        {id:1,img:dron, text: "services"},
        {id:2,img:dron, text: "services"},
        {id:3,img:dron, text: "services"},
        {id:4,img:dron, text: "services"}
    ]
    return(
        <div className="services">
            <div className="service-head">
                <h2 className="service-H2">Услуги</h2>
                <NavLink to='/AllServices'><button className="service-btn"> Все Услуги</button></NavLink>
            </div>
            <div className="service-content">
                
                {
                    services.map(service=>(
                        <NavLink to="./InfoPage" className={main ? " service-thing services-info-dark ": "services-info-light service-thing"}>
                            <div id={service.id}>
                                <div className="service-carusel"><CarouselService></CarouselService></div>
                                <h3>{service.text}</h3>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}