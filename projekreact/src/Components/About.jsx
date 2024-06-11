import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import './Index.css'
import lingkaran from '../Assets/img/Ellipse142.png'

const teamMembers = [
  
];

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about">
      <b className="visi-misi-dan">Visi, Misi, dan Tujuan</b>
      <div className="tujuan-wrapper">
        <div className="rani">Tujuan</div>
      </div>
      <div className="visi-wrapper">
        <div className="rani">Visi</div>
      </div>
      <div className="misi-wrapper">
        <div className="rani">Misi</div>
      </div>
      <div className="about-child"></div>
      <div className="menciptakan-platform-online">
        Menciptakan platform online yang dapat membantu pengguna melalui pengalaman digital yang inovatif, edukatif, dan berdaya guna. Kami bertekad untuk menjadi lingkungan yang inklusif, mendukung pertumbuhan pribadi dan profesional, serta mendorong kolaborasi yang positif
      </div>
      <div className="membantu-masyarakat-mencari">
        Membantu masyarakat mencari informasi lokasi kuliner Sumatera utara dalam suatu platform website
      </div>
      <div className="mengembangkan-konten-edukatif-container">
        <p className="mengembangkan-konten-edukatif">Mengembangkan konten edukatif berkualitas</p>
        <p className="mengembangkan-konten-edukatif">&nbsp;</p>
        <p className="mengembangkan-konten-edukatif">Desain antarmuka ramah pengguna dan inovasi</p>
        <p className="mengembangkan-konten-edukatif">&nbsp;</p>
        <p className="mengembangkan-konten-edukatif">Teknologi untuk menciptakan platform inklusif yang memfasilitasi kolaborasi positif</p>
        <p className="mengembangkan-konten-edukatif">&nbsp;</p>
        <p className="mengembangkan-konten-edukatif">Memberdayakan pengguna</p>
        <p className="mengembangkan-konten-edukatif">&nbsp;</p>
        <p className="mengembangkan-konten-edukatif">Memberikan dampak positif pada pertumbuhan pribadi dan profesional.</p>
      </div>
      <img className="about-item" alt="" src={lingkaran}/>
      <img className="about-inner" alt="" src={lingkaran} />
      <img className="ellipse-icon" alt="" src={lingkaran} />
      <img className="about-child1" alt="" src={lingkaran} />
      <img className="about-child2" alt="" src={lingkaran} />
    </div>
    <Footer/>
    </>
  );
  
};

export default About;
