import React from "react";
import './infoPage.css'
import {NavLink} from 'react-router-dom'
import CarouselInfo from "./CarouselInfo";
import Footer from "../../components/Footer";

export default function InfoPage(){
    return(
        <div className="InfoPage">
            <header className='infopage-header'>
                <div className='container infopage-header-content'>
                    <NavLink to='/' className='infopage-logo'>LOGO</NavLink>
                    <nav className='infopage-nav'>
                        <NavLink to='/LogIn' className="infopage-Login">ВОЙТИ</NavLink>
                    </nav>
                </div>
            </header>
            <div className="container infopage-main">
                <div className="infopage-detail">
                    <h2>DETAIL</h2>
                    <p>PRICE</p>
                </div>
                <div className="infopage-name">
                    <h3>ZHANTAI</h3>
                    <p>0557231700</p>
                </div>
                <div className="infopage-detailInfo">
                    <div className="infopage-detailDesc"> 
                        <div className="infopage-desc">
                            <p>Цена:</p>
                            <p>3477 C</p>
                        </div>
                        <div className="infopage-desc">
                            <p>Область:</p>
                            <p>Чуйская область</p>
                        </div>
                        <div className="infopage-desc">
                            <p>Город:</p>
                            <p>Бишкек</p>
                        </div>
                        <div className="infopage-desc">
                            <p>Состояние:</p>
                            <p>Б/У</p>
                        </div>
                        <h3>Описание</h3>
                        <p>Насадки на выхлопw211</p>
                    </div>
                    <div className="infopage-carusel"><CarouselInfo/></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}