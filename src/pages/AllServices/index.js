import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './allservices.css'
import dron from './dron.png'
import CarouselServices from './CarouselServices'
import Footer from '../../components/Footer'

export default function AllServices(){
    const services = [
        {id:1,img:dron, text: "services"},
        {id:2,img:dron, text: "services"},
        {id:3,img:dron, text: "services"},
        {id:4,img:dron, text: "services"},
        {id:5,img:dron, text: "services"},
        {id:6,img:dron, text: "services"},
        {id:7,img:dron, text: "services"},
        {id:8,img:dron, text: "services"},
        {id:9,img:dron, text: "services"},
        {id:10,img:dron, text: "services"}
    ]
    const [main,setMain]=useState(false)
    return(
        <div className='allService'>
            <header className='services-header'>
                <div className='container services-header-content'>
                    <button className='services-btn' onClick={()=>setMain(!main)}>{main ?  "LIGHT":"DARK"}</button>
                    <NavLink to='/' className='services-logo'>LOGO</NavLink>
                    <nav className='services-nav'>
                        <NavLink to='/LogIn' className="services-Login">ВОЙТИ</NavLink>
                    </nav>
                </div>
            </header>
            <main className={main ? "services-dark" : "services-light"} >
                <div className='container services-main'>
                    {
                        services.map(service=>(
                            <NavLink to='./InfoPage'className={main ? " service-thing services-info-dark ": "services-info-light service-thing"}>
                                <div id={service.id} >
                                    <div className="service-carusel"><CarouselServices></CarouselServices></div>
                                    <h3>{service.text}</h3>
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