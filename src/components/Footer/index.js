import React from "react";
import { NavLink } from "react-router-dom";
import './footer.css'

export default function Footer(){
    return (
        <div className="footer">
            <div className="container footer-main animate__animated wow animate__fadeInUp" >
                <p><NavLink to='/'>LOGO</NavLink> — один из самых посещаемых автомобильных<br/> сайтов в Кыргызском интернете</p>
                <div className="footer-contacts">
                    <h3>Контакты:</h3>
                    <p>+996557231700</p>
                </div>
            </div>
        </div>
    )
}