import React from 'react'
import './Index.css'
import lambang from "../Assets/img/lambang.png"
import home from '../Assets/img/1.png'
import Navbar from './Navbar';
import Footer from './Footer'
import { Link } from 'react-router-dom'
const Loginhome = () => {
  return (
    <>
    <Navbar/>
      	<div className="login-umkmuser">
<div className="login">
<div className="form-email-login">
<div className="form-email-login-child2">
</div>
<Link to='/Login2' className="umkm" id="umkmText">Umkm</Link>
</div>
<div className="form-password-login">
<div className="form-email-login-child2">
</div>
<Link to='/Login1' className="user" id="userText">User</Link>
</div>
</div>
<img className="homelog" alt="" src={home}/>
<div className="login-umkmuser-child">
</div>
<img className="lambanglog" alt="" src={lambang}/>
<div className="login-umkmuser-item">
</div>
<Link className="masukdaftar1">Masuk/Daftar</Link>
</div>
<Footer/>
    </>
  )
}

export default Loginhome
