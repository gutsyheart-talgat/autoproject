import React,{useState} from "react";
import { NavLink } from 'react-router-dom'
import './cabinet.css'
import Footer from '../../components/Footer'

export default function Cabinet(){

    return(
        <div className="cabinet">
            <header className='cabinet-header'>
                <NavLink to='/' className='services-logo'>LOGO</NavLink>
            </header>
            <main className="container cabinet-info">
                <h2 className="cabinet-profile">Мой профиль</h2>
                <div className="cabinet-profileInfo">
                    <div className="profileInfo-shet">
                        <h5>Лицевой счет</h5>
                        <p>0500015855</p>
                    </div>
                    <div className="profileInfo-name">
                        <h5>Имя</h5>
                        <p>Талгат</p>
                    </div>
                    <div className="profileInfo-number">
                        <h5>Номер</h5>
                        <p>0500015855</p>
                    </div>
                    <div className="profileInfo-email">
                        <h5>Email</h5>
                        <p>asdfaf@gmail.com</p>
                    </div>
                </div>
                
            </main>
            <Footer/>
        </div>
    )
}