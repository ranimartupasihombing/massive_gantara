import React from 'react'
import './Index.css'
import profile from "../Assets/img/rian.png"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const Upload = () => {
  return (
    <>
     <Navbar/>
  	<div class="halaman-upload-produk">
    		
    		<b class="nama-produk">Nama produk</b>
    		<b class="alamat">Alamat</b>
    		<b class="kontak">Kontak</b>
    		<b class="thumbnail-produk">Thumbnail produk</b>
    		<b class="harga-produk">Harga produk</b>
    		<b class="kategori-produk">Kategori produk</b>
    		<div class="halaman-upload-produk-child">
    		</div>
    		<b class="deskripsi-produk">Deskripsi produk</b>
    		<div class="halaman-upload-produk-item">
    		</div>
    		<div class="halaman-upload-produk-inner">
    		</div>
    		<div class="rectangle-kontak">
    		</div>
    		<div class="halaman-upload-produk-child1">
    		</div>
    		<div class="halaman-upload-produk-child2">
    		</div>
    		<div class="halaman-upload-produk-child3">
    		</div>
    		<Link to='/Dashboard' class="unggah" id="unggahText">Unggah</Link>
    		<div class="bika-ambon-rian-nama">Bika Ambon Rian</div>
    		<div class="jl-besar-sumatera-no78">Jl.Besar Sumatera No.78</div>
    		<div class="divnomor">085277116735</div>
    		<div class="divharga">
      			<p class="p">15.000 - 50.000</p>
      			<p class="p">&nbsp;</p>
    		</div>
    		<img class="image-upload" alt="" src={profile}/>
    		
    		<div class="halaman-upload-produk-child4">
    		</div>
    		<div class="halaman-upload-produk-child5">
    		</div>
    		<div class="makanan-ringan-pilih">Makanan ringan</div>
    		<div class="makanan-berat-pilih">Makanan berat</div>
    		
  	</div>
  	
  	
  	
  	
  	
    </>
  )
}

export default Upload
