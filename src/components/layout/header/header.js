"use client"
import React, { useState, useEffect } from "react";
import { Select } from 'antd';
import AlpideDocs from '../../../images/alpideDocsLogo.svg';
import { Input } from 'antd';
import BottomBar from '../bottomBar/bottomBar';
import UsFlag from "@/images/usFlag.png";
import IndiaFlag from "@/images/indFlag.png";
import UAEFlag from "@/images/uaeFlag.png";
import UKFlag from "@/images/ukFlag.png";

const { Search } = Input;

const flagOptions = [
  {
    value: 'india',
    label: (
      <div>
       <img src={IndiaFlag.src} alt="India" style={{ width: '40px', marginRight: '8px' }} />
      </div>
    ),
  },
  {
    value: 'usa',
    label: (
      <div>
        <img src={UsFlag.src} alt="USA" style={{ width: '40px', marginRight: '8px' }} />
      </div>
    ),
  },
  {
    value: 'uae',
    label: (
      <div>
        <img src={UAEFlag.src} alt="Uae" style={{ width: '40px', marginRight: '8px' }} />
      </div>
    ),
  },
  {
    value: 'uk',
    label: (
      <div>
        <img src={UKFlag.src} alt="UK" style={{ width: '40px', marginRight: '8px' }} />
      </div>
    ),
  },
];

const Header = () => { 
  const [selectedCountry, setSelectedCountry] = useState('india');
  const [isSticky, setIsSticky] = useState(false);

  const handleChange = (value) => {
    setSelectedCountry(value);
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isSticky ? 'sticky' : ''}`}>
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
              onChange={handleChange}
              options={flagOptions}
            />
          </div>
        </div>
        <div className="searchBox">
          <Search placeholder="Search here..." />
        </div>
        <div className="rightArea">
          <button className="signupButton">Sign Up</button>
        </div>
      </div>
      <div className="bottomBar">
        <BottomBar />
      </div>
    </div>
  );
};

export default Header;
