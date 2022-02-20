import React,{useState,useEffect} from "react";
import './signin.css'
import { NavLink } from 'react-router-dom'
export default function SignIn(){
    const [account , setAccount] = useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [password,setPassword] = useState('')
    const [accountDirty, setAccountDirty]= useState(false)
    const [emailDirty, setEmailDirty]=useState(false)
    const [phoneDirty, setPhoneDirty]=useState(false)
    const [passwordDirty,setPasswordDirty] = useState(false)
    const [accountError, setAccountError] = useState('Поле обязательна')
    const [emailError, setEmailError]=useState('Поле обязательна')
    const [phoneError, setPhoneError]=useState('Поле обязательна')
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
            case "email":
                setEmailDirty(true)
                break
            case "phone":
                setPhoneDirty(true)
                break
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
    const EmailHandler = (e) =>{
        setEmail(e.target.value)
        if(!e.target.value){
            setEmailError('Поля обязательны для заполнения')
        }else{
            setEmailError('')
        }
    }
    const PhoneHandler = (e) =>{
        setPhone(e.target.value)
        if(!e.target.value){
            setPhoneError('Поля обязательны для заполнения')
        }else{
            setPhoneError('')
        }
    }
    return(
        <div className="SignIn">
            <header className='signin-header'>
                <div className='container signin-header-content'>
                    <NavLink to='/' className='signin-logo'>LOGO</NavLink>
                    <nav className='signin-nav'>
                        <NavLink to='/LogIn' className="signin-Login">ВОЙТИ</NavLink>
                    </nav>
                </div>
            </header>
            <div className="signin-background">
                <div className="container signin-main">
                    <div className="signin-path">
                        <h2>РЕГИСТРАЦИЯ</h2>
                        <input onChange={e=>accountHandler(e)} value={account} onBlur={e => blurHandle(e)} name="account" className="signin-account" type="text" placeholder="ACCOUNT"/>
                        {(accountDirty && accountError) && <div style={{color:"red"}}>{accountError}</div>}
                        <input onChange={e => EmailHandler(e)} onBlur={(e)=>blurHandle(e)} name='email' value={email} className="signin-email" type="email" placeholder="EMAIL"/>
                        {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
                        <input onChange={e => PhoneHandler(e)} onBlur={(e)=>blurHandle(e)} name='phone' value={phone} className="signin-number" type="number" placeholder="PHONE 0(XXX)XX XX XX"/>
                        {(phoneDirty && phoneError) && <div style={{color:"red"}}>{phoneError}</div>}
                        <input name='date' className="signin-number" type="date"/>
                        <input name="password" onChange={e=>passwordHandler(e)} value={password} onBlur={e => blurHandle(e)} className="signin-password" type="password" placeholder="PASSWORD"/>
                        {(passwordDirty && passwordError) && <div style={{color:"red"}}>{passwordError}</div>}
                        <NavLink to="/cabinet"><button disabled={!valid} className="signin-btn">ЗАРЕГИСТРИРОВАТЬСЯ</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}