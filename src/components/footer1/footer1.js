import React from 'react';
import { Button, Flex, Tooltip } from 'antd';
import footer1Style from '../footer1/footer1.css';
import { LikeOutlined,DislikeOutlined,LeftOutlined,RightOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

function footer1() {
    return (
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
    );
}

export default footer1;