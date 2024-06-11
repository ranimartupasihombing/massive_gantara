import React, { useState } from 'react';
import './Index.css';
import profile from "../Assets/img/rian.png";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const UmkmProfile = () => {
  const [namaUsaha, setNamaUsaha] = useState("Blka abon rian");
  const [email, setEmail] = useState("Galleofranco@gmail.com");
  const [noHp, setNoHp] = useState("087866298710");
  const [tempatUsaha, setTempatUsaha] = useState("Provinsi Sumatera Utara");
  const [alamatUsaha, setAlamatUsaha] = useState("Jl. Sumatera No.78, Belawan I, Medan Kota Belawan, Kota Medan, Sumatera Utara 20411");
  const [profileImg, setProfileImg] = useState(profile);

  const handleSave = () => {
    const data = {
      namaUsaha,
      email,
      noHp,
      tempatUsaha,
      alamatUsaha
    };
    console.log(data); // Lakukan sesuatu dengan data ini, seperti mengirim ke server atau menyimpan di local storage
    alert('Data berhasil disimpan!');
  };

  const handleProfileImgClick = () => {
    document.getElementById('profile-img-input').click();
  };

  const handleProfileImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImg(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile_umkm">
      <Navbar />
      <div className="profile-picture_umkm" onClick={handleProfileImgClick}>
        <img src={profileImg} alt="Profile" />
      </div>
      <input
        type="file"
        id="profile-img-input"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleProfileImgChange}
      />
      <div className='umkm-Profil'>
        <h1>Profil</h1>
      </div>
      <div className="form_umkm">
        <div className="form-left_umkm">
          <label htmlFor="nama-usaha_umkm">Nama Usaha</label>
          <input
            type="text"
            id="nama-usaha_umkm"
            value={namaUsaha}
            onChange={(e) => setNamaUsaha(e.target.value)}
          />
          
          <label htmlFor="email_umkm">Email</label>
          <input
            type="email"
            id="email_umkm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label htmlFor="no-hp_umkm">No HP</label>
          <input
            type="text"
            id="no-hp_umkm"
            value={noHp}
            onChange={(e) => setNoHp(e.target.value)}
          />
        </div>
        
        <div className="form-right_umkm">
          <label htmlFor="tempat-usaha_umkm">Tempat Usaha</label>
          <input
            type="text"
            id="tempat-usaha_umkm"
            value={tempatUsaha}
            onChange={(e) => setTempatUsaha(e.target.value)}
          />
          
          <label htmlFor="alamat-usaha_umkm">Alamat Usaha</label>
          <input
            type="text"
            id="alamat-usaha_umkm"
            value={alamatUsaha}
            onChange={(e) => setAlamatUsaha(e.target.value)}
          />
          
          <div className="button-container_umkm">
            <Link to="/Upload">
              <button className="button_umkm">Unggah produk</button>
            </Link>
            <Link to="/dashboard">
              <button className="button_umkm">Dashboard</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="save-exit-container_umkm">
        <button className="save-button_umkm">Keluar</button>
        <button className="exit-button_umkm" onClick={handleSave}>Simpan</button>
      </div>
    </div>
  );
};

export default UmkmProfile;