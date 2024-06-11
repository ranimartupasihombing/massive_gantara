import React, { useState } from 'react'
import './Index.css'
import lambang from "../Assets/img/lambang.png"
import home from '../Assets/img/1.png'
import { register, registerumkm } from './api'; // Pastikan Anda sudah membuat file api.js dengan fungsi login dan register

const Daftar = () => {
  const [registerUsername, setregisterUsername] = useState('');
  const [registerPassword, setregisterPassword] = useState('');
  // const [Jenis, setjenis] = useState('');
  // const [Nama, setnama] = useState('');
  // const [Gambar, setgambar] = useState('');

  const handleRegister = async () => {
    const response = await registerumkm(registerUsername, registerPassword);
  };
  const login = () => {
		window.location.href = '/Login2'; // Mengarahkan pengguna ke URL "/menu"
	  };

  // const handleUpload = async () => {
  //   const response = await upload(Jenis, Nama, Gambar);
  // };

  return (
    <>
      <div className="login-umkmuser">
      <img className="homelog" alt="" src={home}/>
<div className="login-umkmuser-child">
</div>
<img className="lambanglog" alt="" src={lambang}/>
<div className="rectanglelogin" />
<b className="masukdaftarlog">Buat AKun</b>
<form action="">
<b className="email">Email</b>
<b className="kata-sandi">Kata Sandi</b>
<div className="form-email-login2" id="formEmailLogin">
<input className="form-email-login-child" 
placeholder="Email"
value={registerUsername}
onChange={(e) => setregisterUsername(e.target.value)}
>
</input>
</div>
<input className="form-password-login-child"
type='password'
placeholder="Password"
value={registerPassword}
onChange={(e) => setregisterPassword(e.target.value)}>
</input>
</form>



<div className="button" onClick={handleRegister}>
<div className="button-child" />
<b className="masuk" >Daftar</b>

</div> 
<div className="tidak-punya-akun-container" id="tidakPunyaAkun">Sudah punya akun?
<span className="daftar-di-sini" onClick={login}>Masuk Di sini!</span>
</div>
</div>
    </>
  )
}

export default Daftar
