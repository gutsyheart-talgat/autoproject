import React from "react";
import { NavLink } from "react-router-dom";
import CarouselDetail from "./CarouselDetail";
import './details.css'
import dron from './dron.png'


export default function Details({main,setMain}){
    const details = [
        {id:1,img:dron, text: "details"},
        {id:2,img:dron, text: "details"},
        {id:3,img:dron, text: "details"},
        {id:4,img:dron, text: "details"}
    ]
    return(
        <div className="details">
            <div className="detail-head">
                <h2 className="detail-H2">Запчасти</h2>
                <NavLink to='/AllDetails'><button className="detail-btn"> Все Запчасти</button></NavLink>
            </div>
            <div className="detail-content">
                
                {
                    details.map(detail=>(
                        <NavLink className={main ? " detail-thing details-info-dark ": "details-info-light detail-thing"} to='./InfoPage'>
                            <div id={detail.id}>
                                <div className="detail-carusel"><CarouselDetail></CarouselDetail></div>
                                <h3>{detail.text}</h3>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}