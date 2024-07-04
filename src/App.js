import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import SideBarClosed from './components/SideBarClosed/SideBarClosed';

const App = () => {
  const [close, setClose] = useState(false);
  
 return (
    <>
      <NavBar/>
      {/* help center */}
      <div style={{display:'flex'}}>
        <SideBar close={close}  setClose = {setClose}/>
        <Routes>
          <Route path="/" element={<Home  close={close}  setClose = {setClose} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>      
      </div>

      

      {/* <SideBarClosed/> */}
    
       
    </>
 );
};

export default App;