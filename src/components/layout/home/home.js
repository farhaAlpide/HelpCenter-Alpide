// Home.js
import React, { useEffect, useState } from 'react';
import HomeStyle from '../Home/Home.css';
import { Divider } from 'antd';
import Footer from '../../layout/footer/footer';
import salesInquiry from '@/images/salesInquiry.svg'
import test from '@/images/test.png';
import test1 from '@/images/test1.png';
import test2 from '@/images/test2.png';
import Breadcrumb from '../../layout/breadcrumb/breadcrumb';

function Home(props) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine the scroll position
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Set a threshold for when to make the heading fixed (adjust this value as needed)
      const threshold = 300;

      // Update the state based on the scroll position
      if (scrollY > threshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <>
    <div className="ContentPage" >
    <div className={`alpidecontainer ${props.close ? 'containerExp' : ''}`}>
      <div className="contentArea">
              
          <div className="topArea">
            <h3>
              Alpide Docs
            </h3>

            <div class="vl"></div>

            <Breadcrumb />

          </div>

          <div className="middleArea">
            
            <h1>
            Sales Inquiry 
            </h1>

            <p>Find a guide about sales inquiry in Alpide ERP.</p>

            

          </div>

          <Divider />

          <div className="bottomArea">
              <div className="leftSection">
              <h3>
                Create Sales Inquiry
              </h3>
              <div className="pointers">
                <p>
              1. Go to the Sales module in the left sidebar and click on Sales Inquiry.
              </p>

              <p>
              2. Click the (+ Create) button in the top-right corner of the page.
              </p>

              <p>
              3. A new page (Sales Inquiry) will open with all the fields to create an inquiry.
              </p>

              <p>
              4. Click on (Select Customer) on the top-right corner of the page, enter the information such as Salesperson, Priority, Project, Product, Quantity.
              </p>
              </div>
              </div>

              
          </div>

          <div className="image">
            {/* <div className="header"> */}
            <div class="header">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
            </div>
          
          
          <img src={salesInquiry.src} alt="" class="imageArea"/>
          </div>
        
        <div className="leftSection">
        <h3>
          Create Sales Inquiry
        </h3>
        <div className="pointers">
          <p>
        1. Go to the Sales module in the left sidebar and click on Sales Inquiry.
        </p>

        <p>
        2. Click the (+ Create) button in the top-right corner of the page.
        </p>

        <p>
        3. A new page (Sales Inquiry) will open with all the fields to create an inquiry.
        </p>

        <p>
        4. Click on (Select Customer) on the top-right corner of the page, enter the information such as Salesperson, Priority, Project, Product, Quantity.
        </p>
        </div>
        </div>

        <div className="leftSection">
        <h3>
          Create Sales Inquiry
        </h3>
        <div className="pointers">
          <p>
        1. Go to the Sales module in the left sidebar and click on Sales Inquiry.
        </p>

        <p>
        2. Click the (+ Create) button in the top-right corner of the page.
        </p>

        <p>
        3. A new page (Sales Inquiry) will open with all the fields to create an inquiry.
        </p>

        <p>
        4. Click on (Select Customer) on the top-right corner of the page, enter the information such as Salesperson, Priority, Project, Product, Quantity.
        </p>
        </div>
        </div>
        

      </div>
      <div className="rightSection" style={isFixed ? {position: "fixed", top:"4%"} : {}}>
              <iframe className="customIframe" width="230" height="120" src="https://www.youtube.com/embed/W6NZfCO5SIk?si=IrcVvS1h5jiYr-Vg&amp;start=301" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
              </div>

    </div>

    <Footer close={props.close}/>
    </div>
    </>
  );
  
}

export default Home;
