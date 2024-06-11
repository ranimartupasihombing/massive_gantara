import React from 'react'
import d1 from '../Assets/img/rian.png'
import d2 from '../Assets/img/ahun.png'
import d3 from '../Assets/img/rika.png'
import d4 from '../Assets/img/santi.png'
import d5 from '../Assets/img/nasywa.png'
import d6 from '../Assets/img/zulaikha.png'
import d7 from '../Assets/img/sari.png'
import d8 from '../Assets/img/gm.png'
import Navbar from './Navbar'
import Footer from './Footer'
const Detailbika = () => {
    const selengkapnya = () => {
		window.location.href = '/Detailumkm'; // Mengarahkan pengguna ke URL "/menu"
	  };
  return (
    <>
	<Navbar/>
      <div class="detail-kuliner-bika-ambon">
    		<div class="detail-kuliner-bika-ambon-child">
    		</div>
    		<div class="detail-kuliner-bika-ambon-item">
    		</div>
    		<div class="detail-kuliner-bika-ambon-inner">
    		</div>
    		<div class="detail-rectangle-div">
    		</div>
    		<div class="detail-kuliner-bika-ambon-child1">
    		</div>
    		<div class="detail-kuliner-bika-ambon-child2">
    		</div>
    		<div class="detail-kuliner-bika-ambon-child3">
    		</div>
    		<div class="detail-kuliner-bika-ambon-child4">
    		</div>
    		<b class="detail-bika-ambon">Bika Ambon</b>
    		<div class="bika-ambon-adalah">Bika Ambon adalah kue tradisional khas Medan, Indonesia. Kue ini terbuat dari bahan-bahan seperti tepung tapioka, telur, gula, dan santan</div>
    		<b class="detail-bika-ambon-rian">Bika Ambon Rian</b>
    		<b class="detail-bika-ambon-ahun">Bika Ambon Ahun</b>
    		<b class="detail-bika-ambon-rika">Bika Ambon Rika</b>
    		<b class="detail-bika-ambon-santi">Bika Ambon Santi</b>
    		<b class="detail-bika-ambon-nasywa">Bika Ambon Nasywa</b>
    		<b class="detail-bika-ambon-zulaikha">Bika Ambon Zulaikha</b>
    		<b class="detail-bika-ambon-ambon">Bika Ambon Ambon Sari</b>
    		<b class="detail-bika-ambon-gaja">Bika Ambon Gaja Mada</b>
    		
    		<div class="detail-kuliner-bika-ambon-child5">
    		</div>
    		<div class="detail-kuliner-bika-ambon-child6">
    		</div>
    		<div class="detail-kuliner-bika-ambon-child7">
    		</div>
    		<div class="detail-kuliner-bika-ambon-child8">
    		</div>
    		<div class="detail-kuliner-bika-ambon-child9">
    		</div>
    		<div class="detail-kuliner-bika-ambon-child10">
    		</div>
    		<div class="detail-kuliner-bika-ambon-child11">
    		</div>
    		<div class="detail-kuliner-bika-ambon-child12">
    		</div>
    		<b class="detail-selengkapnya" id="detail-selengkapnyaText" onClick={selengkapnya}>Selengkapnya &gt;</b>
    		<b class="detail-selengkapnya1">Selengkapnya &gt;</b>
    		<b class="detail-selengkapnya2">Selengkapnya &gt;</b>
    		<b class="detail-selengkapnya3">Selengkapnya &gt;</b>
    		<b class="detail-selengkapnya4">Selengkapnya &gt;</b>
    		<b class="detail-selengkapnya5">Selengkapnya &gt;</b>
    		<b class="detail-selengkapnya6">Selengkapnya &gt;</b>
    		<b class="detail-selengkapnya7">Selengkapnya &gt;</b>
    		<img class="detail1" alt="" src={d1}/>
    		
    		<img class="detail2" alt="" src={d2}/>
    		
    		<img class="detail3" alt="" src={d3}/>
    		
    		<img class="detail4" alt="" src={d4}/>
    		
    		<img class="detail5" alt="" src={d5}/>
    		
    		<img class="detail6" alt="" src={d6}/>
    		
    		<img class="detail7" alt="" src={d7}/>
    		
    		<img class="detail8" alt="" src={d8}/>
    		
  	</div>
    <Footer/>
    </>
  )
}

export default Detailbika
