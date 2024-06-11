import React,{useState} from 'react'

const Car = () => {
 const[menu,setmenu]=useState("Makanan Berat");
 const changeMessange=()=>{
    setmenu("Makanan Ringan");
 };
 
    return (
    <div>
      <h1>{menu}</h1>
      <button onClick={changeMessange}>Menu</button>
    </div>
  )
}

export default Car
