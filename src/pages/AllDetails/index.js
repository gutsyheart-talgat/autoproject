import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './allDetails.css'
import dron from './dron.png'
import CarouselDetails from './CarouselDetails'
import Footer from '../../components/Footer'
export default function AllDetails(){
    const details = [
        {id:1,img:dron, text: "details"},
        {id:2,img:dron, text: "details"},
        {id:3,img:dron, text: "details"},
        {id:4,img:dron, text: "details"},
        {id:5,img:dron, text: "details"},
        {id:6,img:dron, text: "details"},
        {id:7,img:dron, text: "details"},
        {id:8,img:dron, text: "details"},
        {id:9,img:dron, text: "details"},
        {id:10,img:dron, text: "details"},
    ]
    const [main,setMain]=useState(false)
    return(
        <div className='allDetail'>
            <header className='details-header'>
                <div className='container details-header-content'>
                    <button className='details-btn' onClick={()=>setMain(!main)}>{main ? "LIGHT" :"DARK"}</button>
                    <NavLink to='/' className='details-logo'>LOGO</NavLink>
                    <nav className='details-nav'>
                        <NavLink to='/LogIn' className="details-Login">ВОЙТИ</NavLink>
                    </nav>
                </div>
            </header>
            <main className={main ? "details-dark" : "details-light"} >
                <div className='container details-main'>
                    {
                        details.map(detail=>(
                            <NavLink to='./InfoPage' className={main ? " detail-thing details-info-dark ": "details-info-light detail-thing"}>
                                <div id={detail.id} >
                                    <div className="detail-carusel"><CarouselDetails></CarouselDetails></div>
                                    <h3>{detail.text}</h3>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </main>
            <Footer/>
        </div>
    )
}