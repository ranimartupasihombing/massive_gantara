import React from 'react'
import './Index.css'
import m1 from '../Assets/img/miegomakgoreng.png'
import m2 from '../Assets/img/miegomakkuah.png'
import m3 from '../Assets/img/ayamgota.png'
import m4 from '../Assets/img/lonsay.png'
import m5 from '../Assets/img/miebalap.png'
import m6 from '../Assets/img/tauco.png'
import m7 from '../Assets/img/pakis.png'
import m21 from '../Assets/img/arsik.png'
import m28 from '../Assets/img/naniura.png'
import m13 from '../Assets/img/anyangpakis.jpeg'
import m22 from '../Assets/img/miebebek.jpeg'
import m14 from '../Assets/img/sotoudang.jpeg'
import m15 from '../Assets/img/sambaltuktuk.png'
 import m16 from '../Assets/img/daunubi.png'
 import m11 from '../Assets/img/natinombur.png'
 import m17 from '../Assets/img/pecel.png'
 import m27 from '../Assets/img/dendeng.jpeg'
 import m19 from '../Assets/img/nasikentut.jpeg'
 import m20 from '../Assets/img/karibihun.png'
 import m24 from '../Assets/img/bpk.png'
 import m25 from '../Assets/img/bakmihock.jpeg'
 import m26 from '../Assets/img/bakmisanghai.jpeg'
 import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Berat = () => {
  return (
    <>
	<Navbar/>
      <b className="menu-makanan-ringan1">Menu Makanan Berat </b>
    		<div className="rekomendasi-makanan-khas-container">
      			<p className="rekomendasi-makanan-khas">Menu makanan berat dari Sumatera Utara</p>
      			<p className="dengan-suasana-yang">dengan suasana yang baru dan tempat yang baru</p>
            </div>
            <div className="menu-makanan-ringan">

    		<div className="menu-makanan-ringan-inner">
      			<div className="group-child1">
      			</div>
    		</div>
            <b className="laksa-medan1">Ayam Gota</b>
			<b class="selengkapnya2">Selengkapnya &gt;</b>
            <img src={m3} alt="Ayam Gota" className='laksa-medan2'/>


            <div className="rectangle-parent6">
      			<div className="group-child1">
      			</div>
    		</div>
			<b className="bika-ambon">Mie Gomak Goreng</b>
			<Link to='/Detailmie' class="selengkapnya">Selengkapnya &gt;</Link>
            <img src={m1} alt="migogo" className="image1" />

            <div className="rectangle-parent9">
      			<div className="group-child1">
      			</div>
    		</div>
            <b className="ombus-ombus">Mie Gomak Kuah</b>
			<b class="selengkapnya1">Selengkapnya &gt;</b>
            <img src={m2} alt="mie gomak kuah" className="image2" />
			
    
            <div className="group-div">
      			<div className="group-child1">
      			</div>
    		</div>
            <b className="lemang">Lontong Sayur</b>
			<b class="selengkapnya3">Selengkapnya &gt;</b>
            <img src={m4} alt="lontong" className="image3" />


            <div className="rectangle-parent7">
      			<div className="group-child1">
      			</div></div> 
                  <b className="bubur-gadong">Mie Balap</b>
			<b class="selengkapnya4">Selengkapnya &gt;</b>
            <img src={m5} alt="miebalap" className="image27" />


    		<div className="rectangle-parent8">
      			<div className="group-child1">
      			</div>
    		</div>  
            <b className="martabak-piring">Tauco Udang</b>
			<b class="selengkapnya5">Selengkapnya &gt;</b>
            <img src={m6} alt="tauco" className="image12" />


            <div className="menu-makanan-ringan-child">
      			<div className="group-child1">
      			</div>
    		</div>
            <b className="sendor">Gulai Pakis Udang</b>
			<b class="selengkapnya6">Selengkapnya &gt;</b>
            <img src={m7} alt="pakis" className="image4" />


<div className="rectangle-container1">
      			<div className="group-child1">
      			</div>
    		</div> 
            <b className="godok-godok-pisang">Arsik</b>
			<b class="selengkapnya7">Selengkapnya &gt;</b>
            <img src={m21} alt="Arsik" className="image16" />


            <div className="rectangle-parent5">
      			<div className="group-inner">
      			</div>
    		</div>
            <b className="kue-lompong-sagu">Naniura</b>
			<b class="selengkapnya14">Selengkapnya &gt;</b>
			<img src={m28} alt="Naniura" className="image19" />

            <div className="rectangle-parent11">
      			<div className="group-inner">
      			</div>
    		</div>
            <b className="sasagun">Anyang Pakis</b>
			<b class="selengkapnya13">Selengkapnya &gt;</b>
            <img src={m13} alt="Anyang Pakis" className="sasagun2" /> 


            <div className="rectangle-group1">
      			<div className="group-inner">
      			</div>
    		</div>
            <b className="alame">Mie Bebek</b>
			<b class="selengkapnya12">Selengkapnya &gt;</b>
            <img src={m22} alt="Mie bebek" className="image6" />


            <div className="rectangle-parent3">
      			<div className="group-inner">
      			</div>
    		</div>
            <b className="pohul-pohul">Soto Udang</b>
			<b class="selengkapnya8">Selengkapnya &gt;</b> 
            <img src={m14} alt="soto udang" className="image7" />


            <div className="rectangle-parent4">
      			<div className="group-inner">
      			</div>
    		</div> 
            <b className="rujak-kolam1">Sambal Tuktuk</b>
			<b class="selengkapnya15">Selengkapnya &gt;</b>
            <img src={m15} alt="rujak" className="image28" />
			
            
    	 <div className="rectangle-parent10">
      			<div className="group-inner">
      			</div>
    		</div> 
			<b className="untir-untir">Daun Ubi Tumbuk</b>
			<b class="selengkapnya16">Selengkapnya &gt;</b>
            <img src={m16} alt="untir2" className="image8" />
			

            <div className="rectangle-parent1">
      			<div className="group-inner">
      			</div>
    		</div> 
			<b className="kue-bohong">Natinombur</b>
			<b class="selengkapnya17">Selengkapnya &gt;</b>
            <img src={m11} alt="kuebohong" className="image9" />

            <div className="rectangle-parent2">
      			<div className="group-inner">
      			</div>
      			</div>
                <b className="panukkup1">Pecal</b> 	 
			<b class="selengkapnya18">Selengkapnya &gt;</b>
            <img src={m17} alt="panukkup" className="image10" />


<div className="rectangle-parent18">
      			<div className="group-inner">
      			</div>
    		</div>
            <b className="keripik-sambal-sibolga">Dendeng</b>
			<b class="selengkapnya25">Selengkapnya &gt;</b>
            <img src={m27} alt="keripik" className="image29" />

            <div className="rectangle-parent21">
      			<div className="group-inner">
      			</div>
    		</div>
			<b className="wajik-ketan">Nasi Kentut</b>
			<b class="selengkapnya22">Selengkapnya &gt;</b>
            <img src={m19} alt="wajik" className="image13" />


            <div className="rectangle-parent12">
      			<div className="group-inner">
      			</div>
    		</div>
			<b className="cimpa">Kari Bihun Tabona</b>
			<b class="selengkapnya19">Selengkapnya &gt;</b>
			<img src={m20} alt="cimpa" className="image14" />

			<b class="non-halal">Non-Halal</b>
    		<b class="halal">Halal</b>
{/* 1 */}
			<div className="rectangle-parent20">
      			<div className="group-inner">
      			</div>
                  <div className=""></div>
    		</div><b class="selengkapnya27">Selengkapnya &gt;</b>	
			<b className="bakwan-teri-medan">BPK</b>
			<img src={m24} alt="bpk" className="image24" />
    	

    	 <div className="rectangle-parent23">
      			<div className="group-inner">
      			</div>
                  <div className=""></div>
    		</div>
			<b class="selengkapnya24">Selengkapnya &gt;</b> 
			<b className="karipap">Bakmie Hock</b>
			<img src={m25} alt="karipap" className="image25" />
			

			 <div className="rectangle-parent14">
      			<div className="group-inner">
      			</div>
                  <div className=""></div>
    		</div>
			<b class="selengkapnya21">Selengkapnya &gt;</b>  
			<b className="bolu-meranti">Bakmie Sanghai</b>
			<img src={m26} alt="meranti" className="image26"/>
				
</div>


    </>
  )
}

export default Berat
