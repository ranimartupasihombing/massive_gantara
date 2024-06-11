import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Ringan from './Components/Ringan';
import Berat from './Components/Berat';
import Loginhome from './Components/Loginhome';
import Login1 from './Components/Login1';
import Daftar from './Components/Daftar';
import Login2 from './Components/Login2';
import Umkmprofile from './Components/Umkmprofile';
import Upload from './Components/Upload';
import Dashboard from './Components/Dashboard';
import ProfilUser from './Components/ProfilUser';
import Detailbika from './Components/Detailbika';
import Detailmie from './Components/Detailmie';
import Detailumkm from './Components/Detailumkm';
import About from './Components/About';
import Peta from './Components/Maps';
import Adminlogin from './Admin/Component/Adminlogin';
import AdminLayout from './Admin/AdminLayout';
import DashboardAdmin from './Admin/Component/DashboardAdmin';
import UlasanBikaAmbon from './Components/UlasanBikaAmbon';
import Daftar2 from './Components/Daftar2'
import Pengguna from './Admin/Component/Pengguna';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/loginhome' element={<Loginhome />} />
          <Route path='/berat' element={<Berat />} />
          <Route path='/ringan' element={<Ringan />} />
          <Route path='/login1' element={<Login1 />} />
          <Route path='/daftar' element={<Daftar />} />
          <Route path='/daftar2' element={<Daftar2/>}/>
          <Route path='/login2' element={<Login2 />} />
          <Route path='/umkmprofile' element={<Umkmprofile />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profiluser' element={<ProfilUser />} />
          <Route path='/detailbika' element={<Detailbika />} />
          <Route path='/detailmie' element={<Detailmie />} />
          <Route path='/detailumkm' element={<Detailumkm />} />
          <Route path='/about' element={<About />} />
          <Route path='/maps' element={<Peta />} />
          <Route path='/adminlogin' element={<Adminlogin />} />
          <Route path='/ulasanbikaambon' element={<UlasanBikaAmbon />} />
          <Route path='/dashboardadmin' element={<DashboardAdmin/>}/>
          <Route path='/pengguna' element={<Pengguna/>}/>

          {/* Define route for AdminLayout with nested routes */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='beranda' element={<DashboardAdmin />} />
            {/* Add other nested routes here as needed */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
