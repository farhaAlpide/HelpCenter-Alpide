// Components/NavBar.js

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AlpideDocs from '../../images/alpideDocsLogo.svg';
import NavBarStyle from './NavBar.css';
import { Input, Space } from 'antd';
import BottomBar from '../bottom-bar/bottom-bar';
import UsFlag from "../../images/usFlag.png";
import IndiaFlag from "../../images/indFlag.png";
import UAEFlag from "../../images/uaeFlag.png";
import UKFlag from "../../images/ukFlag.png";
import {
  MenuItem,
  Select,
} from "@mui/material";

const { Search } = Input;

const NavBar = () => {
  const [selectedCountry, setSelectedCountry] = useState("in"); 

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

 return (
 <nav className="navBar">
       <div className="top-bar">
        <div className="leftMenu">
        <div className="logoArea">
            <a href="/">
                <img src={AlpideDocs} alt="" />
            </a>
        </div>

        <div className="flagArea">
          <Select
                  labelId="country-select-label"
                  id="country-select"
                  value={selectedCountry} // You need to manage the selected country state
                  onChange={handleCountryChange}
                  className="customSelect"
                  
                >
                  {/* Replace these menu items with the actual list of countries */}
                  <MenuItem value="us">
                  <div className="flagArea">
                      <img src={UsFlag} alt="US Flag" />
                      
                    </div>
                  </MenuItem>
                  <MenuItem value="in">
                  <div className="flagArea">
                      <img src={IndiaFlag} alt="India Flag" />
                      
                    </div>
                  </MenuItem>
                  <MenuItem value="uae">
                  <div className="flagArea">
                      <img src={UAEFlag} alt="Uae Flag" />
                      
                    </div>
                  </MenuItem>
                  <MenuItem value="uk">
                  <div className="flagArea">
                      <img src={UKFlag} alt="Uk Flag" />
                      
                    </div>
                  </MenuItem>
                  {/* Add more menu items for other countries */}
          </Select>
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

export default NavBar;

