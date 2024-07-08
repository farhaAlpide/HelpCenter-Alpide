// import Image from "next/image";

"use client";
import Link from "next/link";
import React, { useState } from 'react'
import Header from '../components/layout/header/header';
import SideBar from '../components/layout/sideBar/sideBar';
import Main from '../components/layout/home/home';
import CustomStyle from '../app/custom.css';




export default function Home() {
  const [close, setClose] = useState(false);
  return (

    <>
      <div className="main-wrapper">
       <Header />
        <div className="content-wrapper" 
        style={{display:'flex'}}
        >
        <SideBar close={close}  setClose = {setClose}/>
        <div className="view-wrapper" style={{width:"100%"}}>
          <Main close={close}  setClose = {setClose}/>  
        </div>     
      </div>

      </div>
    </>
  );
}
