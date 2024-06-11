import React from 'react'
import image from "../Assets/img/rian.png"
import Navbar from './Navbar'
const Dashboard = () => {
  return (
    <>
	<Navbar/>
  	<div className="dashboard-umkm">
    		<div className="dashboard-umkm-child">
    		</div>
    		<div className="dashboard-umkm-item">
    		</div>
    		<div className="dashboard-umkm-inner">
    		</div>
    		<div className="rectangle-divdashboard">
    		</div>
    		<div className="dashboard-umkm-child1" id="rectangle4">
    		</div>
    		<div className="dashboard-umkm-child2">
    		</div>
    		<div className="dashboard-umkm-child3">
    		</div>
    		<div className="dashboard-umkm-child4">
    		</div>
    		<b className="produkdashboard">Produk</b>
    		<b className="kategori">Kategori</b>
    		<b className="harga-jual">Harga Jual</b>
    		<div className="dashboard-umkm-simpan" id="rectangle8">
    		</div>
    		<div className="simpan1">Simpan</div>
    		<div className="unggah-produk">Unggah Produk</div>
		<img className="image-dashboard" alt="" src={image}/>
    		
    		<div className="bika-ambon-riandashboard">Bika Ambon Rian</div>
    		<div className="makanan-ringandashboard">Makanan ringan</div>
    		<div className="rp15000-rp50000">Rp.15.000-Rp.50.000</div>
    		<div className="editdashboard" id="editText">Edit</div>
    		<b className="dasboard-umkm">Dasboard Umkm</b>
    		
  	</div>
  	
  	
  	
  	
    </>
  )
}

export default Dashboard
