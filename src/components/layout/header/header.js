
"use client"
import React, { useState } from "react";
import { Select } from 'antd';
import Link from "next/link";
import AlpideDocs from '../../../images/alpideDocsLogo.svg';

import { Input, Space } from 'antd';
import BottomBar from '../bottomBar/bottomBar';
import UsFlag from "@/images/usFlag.png";
import IndiaFlag from "@/images/indFlag.png";
import UAEFlag from "@/images/uaeFlag.png";
import UKFlag from "@/images/ukFlag.png";
// import {MenuItem,Select} from "@mui/material";

const { Search } = Input;

const flagOptions = [
  {
    value: 'india',
    label: (
      <div>
       <img src={IndiaFlag.src}
          
          alt="India"
          style={{ width: '40px', marginRight: '8px' }}
        />
        
      </div>
    ),
  },
  {
    value: 'usa',
    label: (
      <div>
        <img src={UsFlag.src} 
          alt="USA"
          style={{ width: '40px', marginRight: '8px' }}
        />
        
      </div>
    ),
  },
  {
    value: 'uae',
    label: (
      <div>
        <img src={UAEFlag.src}
          alt="Uae"
          style={{ width: '40px', marginRight: '8px' }}
        />
        
      </div>
    ),
  },
  {
    value: 'uk',
    label: (
      <div>
        <img src={UKFlag.src}
          alt="UK"
          style={{ width: '40px', marginRight: '8px' }}
        />
        
      </div>
    ),
  },
 
];


const header = () => { 

  const [selectedCountry, setSelectedCountry] = useState('india');

  // const handleCountryChange = (event) => {
  //   setSelectedCountry(event.target.value);
  // };

  const handleChange = (value) => {
    setSelectedCountry(value);
    console.log(`selected ${value}`);
  };

  const defaultFlag = (
    <div>
       <img src={IndiaFlag.src}
        alt="India"
        style={{ width: '40px', marginRight: '8px' }}
      />
      
    </div>
  );

 return (
 
 <nav className="navBar">
       <div className="top-bar">
        <div className="leftMenu">
        <div className="logoArea">
            <a href="/">
                <img src={AlpideDocs.src} alt="" />
            </a>
        </div>

       

        <div className="flag-area">
           <Select
              defaultValue={selectedCountry}
              style={{ width: 80 }}
              onChange={handleChange}
              options={flagOptions}
              // value={flagOptions[0]}
          />
        </div>
       </div>

        <div className="searchBox">
        <Search
      placeholder="input search text"
      
      style={{
        width: 800,
      }}
    />
        </div>

        <div className="rightArea">
        <a href='/'> 
        <button className="signupButton">Sign Up</button>
        </a>

            
        </div>
       </div>

       <div className="bottomBar">
           
            <BottomBar />
       </div>
 </nav>
 );
};

export default header;

