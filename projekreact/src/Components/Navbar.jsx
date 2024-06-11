import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Index.css';
import lambang from "../Assets/img/lambang.png";
import cari from "../Assets/img/cari.png";

const Navbar = () => {
	const handleHomeClick = () => {
		window.location.href = '/'; // Mengarahkan pengguna ke URL "/menu"
	  };
	const handleMenuClick = () => {
		window.location.href = '/Menu'; // Mengarahkan pengguna ke URL "/menu"
	  };
	  const handleLoginClick = () => {
		window.location.href = '/Loginhome'; // Mengarahkan pengguna ke URL "/menu"
	  };
	  const handleProfilClick = () => {
		window.location.href = '/Loginhome'; // Mengarahkan pengguna ke URL "/menu"
	  };
	  const about = () => {
		window.location.href = '/About'; // Mengarahkan pengguna ke URL "/menu"
	  };
  return (
    <>
      <div className="navbar">
      			<div className="rectangle-container">
        				<div className="frame-child">
        				</div>
        				<b className="masukdaftar" id="masukdaftarText" onClick={handleLoginClick}>Masuk/daftar</b>
        				<b className="menu" id="menuText" onClick={handleMenuClick}>Menu</b>
						
        				<b className="tentang-kami" id="tentangKamiText" onClick={about}>Tentang Kami</b>
        				<b className="profil" id="profilText" onClick={handleProfilClick}>Profil</b>
        				<b className="halaman-utama" onClick={handleHomeClick}>Halaman Utama</b>
        				<img className="savor-flavor-putih" alt="lambang" src={lambang}/>
        				
      			</div>
      			<div className="search-parent" id="frameContainer1">
        				<img className="search-icon" alt="cari" src={cari}/>
        				
        				<div className="cari">Cari</div>
      			</div>
    		</div>
    </>
  )
}

export default Navbar;