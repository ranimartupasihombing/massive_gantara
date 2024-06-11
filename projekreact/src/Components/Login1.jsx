import React from 'react'
import './Index.css'
import lambang from "../Assets/img/lambang.png"
import home from '../Assets/img/1.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer'
const Login1 = () => {


  return (
    <>
      <div className="login-umkmuser">
      <img className="homelog" alt="" src={home}/>
<div className="login-umkmuser-child">
</div>
<img className="lambanglog" alt="" src={lambang}/>
<div className="rectanglelogin" alt="" src=""/>
<b className="masukdaftarlog">Masuk/Daftar</b>
<form action="">
<b className="email">Email</b>
<b className="kata-sandi">Kata Sandi</b>
<div className="tidak-punya-akun-container" id="tidakPunyaAkun">Tidak punya akun?
<Link to='/Daftar' className="daftar-di-sini">Daftar Di sini!</Link>
</div>
<div className="form-email-login2" id="formEmailLogin">
<input className="form-email-login-child" >
</input>
</div>
<input className="form-password-login-child">
</input>
</form>
<div className="button">
<img className="button-child" alt="" src="Rectangle 9.svg"/>
<Link to='/ProfilUser' className="masuk">Masuk</Link>
</div> 
      </div>
    </>
  )
}

export default Login1
