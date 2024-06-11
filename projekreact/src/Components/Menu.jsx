import React from 'react'
import bg from '../Assets/img/1.png'
import './Index.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Berat from './Berat'
import Ringan from './Ringan'
import { Link } from 'react-router-dom';
const Menu = () => {
    
  return (
    <>
    <Navbar/>
      <div className="menu-makanan-ringanberat">
      
    		<img className="image-75-icon" alt="" src={bg}/>
    		
    		<div className="menu-makanan-ringanberat-child">
    		</div>
    		<div className="menu-makanan-ringanberat-item" id="rectangle1">
    		</div>
			{/* <BrowserRouter>
			<div>
				<Routes>
					<Route path='/Berat' element={<Berat/>} />
					<Route path='/Ringan' element={<Ringan/>} />
				</Routes>
				</div>
				</BrowserRouter> */}
    		<Link to="/Ringan" className="makanan-ringan" >Makanan ringan</Link>
    		<div className="menu-makanan-ringanberat-inner" id="rectangle2">
    		</div>
    		<Link to="/Berat" className="makanan-berat" >Makanan berat</Link >
    		
    		
  	</div>
	<Footer/>
	</>
  )
}

export default Menu
