import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import pic from '../Assets/img/ProfilPic.jpg';
import Navbar from './Navbar';
import './Index.css';

const ProfilUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthplace: '',
    birthdate: '',
    gender: '',
    profilePic: pic,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          profilePic: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = () => {
    console.log(formData);
    // Here you can add code to send formData to your server or handle it as needed
  };

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <img
          className='img-user'
          src={formData.profilePic}
          alt="Profile"
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </div>
      <div className='Profil-user'>Profil</div>
      <div className='Favbtn-user'>
        <Link to="/BookmarkPage">
          <button name='submit-user'>Favorit</button>
        </Link>
      </div>
      <div className='Form-user'>
        <div className='Nama-user'>Nama</div>
        <div className='Email-user'>Email</div>
        <div className='Nohp-user'>
          <span className='spannomor'>No HP</span>
        </div>
        <div className='Input1-user'>
          <input
            type='text'
            name='name'
            placeholder='ex:Galleo Franco Malik'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='Input2-user'>
          <input
            type='email'
            name='email'
            placeholder='ex:Galleo Franco Malik'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='Input3-user'>
          <input
            type='number'
            name='phone'
            placeholder='ex:08123456789'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='Form2-user'>
        <div className='Tempat-user'>Tempat Lahir</div>
        <div className='Tanggal-user'>Tanggal Lahir</div>
        <input
          name='birthplace'
          type='text'
          placeholder='ex:Yogyakarta'
          value={formData.birthplace}
          onChange={handleChange}
        />
        <input
          name='birthdate'
          type='text'
          placeholder='ex:08 Januari 1995'
          value={formData.birthdate}
          onChange={handleChange}
        />
        <div className='Jenis-user'>Jenis Kelamin</div>
        <div className='Laki-user'>
          <label htmlFor="laki">Laki-Laki</label>
        </div>
        <input
          name='gender'
          type="radio"
          id='laki'
          value='Laki-Laki'
          checked={formData.gender === 'Laki-Laki'}
          onChange={handleChange}
        />
        <div className='Perempuan-user'>
          <label htmlFor="perempuan">Perempuan</label>
        </div>
        <input
          name='gender'
          type="radio"
          id='perempuan'
          value='Perempuan'
          checked={formData.gender === 'Perempuan'}
          onChange={handleChange}
        />
      </div>

      <button name='keluar-user'>Keluar</button>
      <button name='simpan-user' onClick={handleSubmit}>Simpan</button>
    </>
  );
}

export default ProfilUser;