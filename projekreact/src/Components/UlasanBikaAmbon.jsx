import React from 'react';
import './Index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import bintang from '../Assets/img/bintang.png';
import profil from '../Assets/img/Pengertian-Freelancer.png';
import back from '../Assets/img/Vector.png';

const UlasanBikaAmbon = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Detailumkm');
  };

  return (
    <>
      <Navbar />
      <div className="halaman-ulasan_ulasan-bika">
        <b className="ulasan-bika-ambon_ulasan-bika">Ulasan Bika Ambon Rian</b>
        
        <img
          className="icon-share_ulasan-bika"
          alt="Back"
          src={back}
          id="iconShareImage"
          onClick={handleBackClick}
          style={{ cursor: 'pointer' }}
        />

        <div className="group-parent_ulasan-bika">
          <div className="rectangle-parent_ulasan-bika">
            <div className="group-child_ulasan-bika"></div>
            <img className="group-item_ulasan-bika" alt="" src={bintang} />
            <div className="salah-satu-bika_ulasan-bika">Salah satu Bika ambon enak di medan. Hrganya jg terjangkau. Cocok buat oleh oleh</div>
          </div>
          <img className="group-inner_ulasan-bika" alt="" src={profil} />
        </div>

        <div className="rectangle-group_ulasan-bika">
          <div className="group-child_ulasan-bika"></div>
          <img className="group-item_ulasan-bika" alt="" src={bintang} />
          <div className="salah-satu-bika1_ulasan-bika">Salah satu Bika ambon enak di medan. Hrganya jg terjangkau. Cocok buat oleh oleh</div>
          <img className="ellipse-icon_ulasan-bika" alt="" src={profil} />
        </div>

        <div className="rectangle-container_ulasan-bika">
          <div className="group-child_ulasan-bika"></div>
          <img className="group-item_ulasan-bika" alt="" src={bintang} />
          <div className="salah-satu-bika2_ulasan-bika">Salah satu Bika ambon enak di medan. Hrganya jg terjangkau. Cocok buat oleh oleh</div>
          <img className="group-child3_ulasan-bika" alt="" src={profil} />
        </div>

        <div className="halaman-utama-parent_ulasan-bika">
          <b className="halaman-utama_ulasan-bika">Halaman Utama</b>
          <b className="profil_ulasan-bika">Profil</b>
          <b className="masukdaftar_ulasan-bika">Masuk/Daftar</b>
          <b className="rekomendasi_ulasan-bika">Rekomendasi</b>
          <b className="tentang-kami_ulasan-bika">Tentang Kami</b>
        </div>

        <div className="group-div_ulasan-bika">
          <div className="group-child_ulasan-bika"></div>
          <img className="group-item_ulasan-bika" alt="" src={bintang} />
          <div className="salah-satu-bika3_ulasan-bika">Salah satu Bika ambon enak di medan. Hrganya jg terjangkau. Cocok buat oleh oleh.</div>
          <img className="group-child6_ulasan-bika" alt="" src={profil} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UlasanBikaAmbon;
