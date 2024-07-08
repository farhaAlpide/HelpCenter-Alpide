
import React from 'react';
import { Button, Flex, Tooltip } from 'antd';
import FooterStyle from '../Footer/Footer.css';
import { LikeOutlined,DislikeOutlined,LeftOutlined,RightOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

function Footer(props) {
  

  return (
    <div className={`footer ${props.close ? 'footerExp' : ''}`}>
    <div className="footerContainer">
    <Divider />
    <div className="footerArea">
    <div className="leftsection">
    <p >Was this helpful?</p>
    <Button icon={<LikeOutlined />}>Yes</Button>
    <Button icon={<DislikeOutlined />}>No</Button>
    </div>

    <div className="rightsection">
    <Button icon={<LeftOutlined />}>Previous</Button>
    <Button>
          Next <RightOutlined />
        </Button>
    </div>
    </div>
    </div>
    </div>

    


  );
  
}

export default Footer;
