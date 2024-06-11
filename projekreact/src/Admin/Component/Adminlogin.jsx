import React from "react";
import "../Component/Adminlogin.css";
import profilimg from "../../Assets/img/Pengertian-Freelancer.png"


const AdminLogin = () => {
  const adminlogin = () => {
		window.location.href = '/DashboardAdmin'; // Mengarahkan pengguna ke URL "/menu"
	  };
  return (
    <div className="admin-login-admin">
      <div className="login-admin">LOGIN</div>
      <div className="login-dashboard-admin-admin">Login Dashboard admin</div>
      <div className="dashboard-admin">Dashboard</div>
      
      <div className="admin-login-child-admin"></div>
      <div className="login1-admin">
        <div className="admin-admin"></div>
        <b className="email-admin">Email</b>
        <b className="kata-sandi-admin">Kata Sandi</b>
        <div className="form-email-login-admin">
          
            <input class="form-verifikasi-child" id="inputnama" placeholder="Mauskan email"/>
          
        </div>
        <div className="form-password-login-admin">
          
            <input class="form-verifikasi-child" id="inputnama" placeholder="Mauskan kata sandi"/>
        
        </div>
        <div className="button-admin">
        <b className="masuk-admin" id="masukText"  onClick={adminlogin}>
            Masuk
          </b>
        </div>
      </div>
      <img
        className="pengertian-freelancer-1-icon-admin"
        alt=""
        src={profilimg}
      />
    </div>
  );
}

export default AdminLogin;
