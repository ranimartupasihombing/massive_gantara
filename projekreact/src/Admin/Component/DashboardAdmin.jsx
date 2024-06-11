import React from 'react';
import './DashboardAdmin.css'

const DashboardAdmin = () => {
    const getumkm = () => {
		window.location.href = '/Pengguna'; // Mengarahkan pengguna ke URL "/menu"
	  };
  return (

      <div className="dashboard_admin">
          <h1>Halaman Dashboard</h1>
          <div className="cards-container_admin">
              <div className="card_admin">
                  <div className="icon_admin">👥</div>
                  <div className="text_admin" onClick={getumkm}>1000 Jumlah Pengguna</div>
              </div>
              <div className="card_admin">
                  <div className="icon_admin">🏪</div>
                  <div className="text_admin" >100 Jumlah UMKM</div>
              </div>
              <div className="card_admin">
                  <div className="icon_admin">🍲</div>
                  <div className="text_admin">100 Kuliner</div>
              </div>
              <div className="card_admin">
                  <div className="icon_admin">⭐</div>
                  <div className="text_admin">50 Jumlah Ulasan</div>
              </div>
          </div>
      </div>
  );
};
export default DashboardAdmin;