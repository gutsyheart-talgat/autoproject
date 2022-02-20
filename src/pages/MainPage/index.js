import './mainPage.css'
import React, { useState } from 'react'
import Details from '../../components/Details'
import Services from '../../components/Services'
import { NavLink } from 'react-router-dom'
import Footer from '../../components/Footer'

export default function MainPage(){
    const [main, setMain] = useState(false)
    return(
        <div className={main ? "mainPage-dark" : "mainPage-light"}>
            <div className='main-head'>
                <div className='container'>
                    <div className='main-head-btns'>
                        <button className='main-btn' onClick={()=>setMain(!main)}>{main ? "light": "dark"}</button>
                        <NavLink to="/LogIn" className='main-login'>ВОЙТИ</NavLink>
                    </div>
                    <div className='main-logo'>
                        <div className='logo-content'>Здесь будет логотип</div>
                    </div>
                </div>
            </div>
            <div className='container main-content'>
                <Details main={main} setMain={setMain}/>
                <Services main={main} setMain={setMain}/>
            </div>
            <Footer/>
        </div>
    )
}