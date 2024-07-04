import React from 'react';
import SideBarStyle from './SideBarClosed.css';
import SidebarOpen from '../../images/SideBar-iconOpen.svg';


function SideBarClosed() {
  return (
    <div className="sideBarClosed" >
        <img src={SidebarOpen} alt="" />
    </div>
  );
};

export default SideBarClosed;
