import React, { useEffect, useState } from "react";
import './login.css'
import { NavLink } from 'react-router-dom'

export default function LogIn(){
    const [account , setAccount] = useState('')
    const [password,setPassword] = useState('')
    const [accountDirty, setAccountDirty]= useState(false)
    const [passwordDirty,setPasswordDirty] = useState(false)
    const [accountError, setAccountError] = useState('Поле обязательна')
    const [passwordError, setPasswordError] = useState('Поле обязательна')
    const [valid, setValid] = useState(false)
    useEffect(()=>{
        if(accountError || passwordError){
            setValid(false)
        }else{
            setValid(true)
        }
    },[accountError,passwordError])

    const blurHandle = (e) =>{
        switch(e.target.name){
            case "account":
                setAccountDirty(true)
                break;
            case "password":
                setPasswordDirty(true)
                break;
        }
    }

    const accountHandler = (e) =>{
        setAccount(e.target.value)
        if(!e.target.value){
            setAccountError('Поля обязательны для заполнения')
        }else{
            setAccountError('')
        }
    }
    const passwordHandler = (e) =>{
        setPassword(e.target.value)
        if(!e.target.value){
            setPasswordError('Поля обязательны для заполнения')
        }else{
            setPasswordError('')
        }
    }
    return(
        <div className="LogIn">
            <header className='login-header'>
                <div className='container login-header-content'>
                    <NavLink to='/' className='login-logo'>LOGO</NavLink>
                    <nav className='login-nav'>
                        <NavLink to='/SignIn' className="login-Login">РЕГИСТРАЦИЯ</NavLink>
                    </nav>
                </div>
            </header>
            <div className="login-background">
                <div className="container login-main">
                    <div className="login-path">
                        <h2>АВТОРИЗАЦИЯ</h2>
                        <form className="login-form">
                            <input onChange={e=>accountHandler(e)} value={account} onBlur={e => blurHandle(e)} className="login-account" type="text" placeholder="ACCOUNT" name="account"/>
                            {(accountDirty && accountError) && <div style={{color:"red"}}>{accountError}</div>}
                            <input onChange={e=>passwordHandler(e)} value={password} onBlur={e => blurHandle(e)} className="login-password" type="password" placeholder="PASSWORD" name="password"/>
                            {(passwordDirty && passwordError) && <div style={{color:"red"}}>{passwordError}</div>}
                            <NavLink to="/cabinet"><button disabled={!valid} className="login-btn">ВОЙТИ</button></NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}