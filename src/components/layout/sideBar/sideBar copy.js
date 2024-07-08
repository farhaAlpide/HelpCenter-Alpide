// Components/NavBar.js
import React, { useState } from 'react';
import Link from "next/link";
//import { Collapse } from 'antd';
import CollapseIcon from '@/images/collapse-icon.svg'
// import CollapseIcon from '../../../images/collapse-icon.svg';
import ExpandIcon from '@/images/expand-icon.svg';
import useModuleList from '@/framework/sidebarList/use-moduleList';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu ,Divider} from 'antd';

const items = [
    {
      key: '1',
      label: 'Overview',
      children: [
        {
          key: '11',
          label: 'Option 1',
        },
        {
          key: '12',
          label: 'Option 2',
        },
        {
          key: '13',
          label: 'Option 3',
        },
        {
          key: '14',
          label: 'Option 4',
        },
      ],
    },
    
    {
        key: '2',
        label: 'On-boarding',
        children: [
          {
            key: '21',
            label: 'Option 1',
          },
          {
            key: '22',
            label: 'Option 2',
          },
          {
            key: '23',
            label: 'Option 3',
          },
          {
            key: '24',
            label: 'Option 4',
          },
        ],
      },
    
      {
      key: '3',
      label: 'Setup',
      children: [
        {
          key: '31',
          label: 'Option 1',
        },
        {
          key: '32',
          label: 'Option 2',
        },
        {
          key: '33',
          label: 'Option 3',
        },
        {
          key: '34',
          label: 'Option 4',
        },
      ],
    },

    {
        key: '4',
        label: 'Settings',
        children: [
          {
            key: '41',
            label: 'Option 1',
          },
          {
            key: '42',
            label: 'Option 2',
          },
          {
            key: '43',
            label: 'Option 3',
          },
          {
            key: '44',
            label: 'Option 4',
          },
        ],
      },

      {
        key: '5',
        label: 'Integrations',
        children: [
          {
            key: '51',
            label: 'Option 1',
          },
          {
            key: '52',
            label: 'Option 2',
          },
          {
            key: '53',
            label: 'Option 3',
          },
          {
            key: '54',
            label: 'Option 4',
          },
        ],
      },

  ];

  const item1 = [
    {
      key: '1',
      label: 'Sales Inquiry',
      children: [
        {
          key: '11',
          label: 'Sales Inquiry Overview',
        },
        {
          key: '12',
          label: 'Create Sales Inquiry',
        },
        {
          key: '13',
          label: 'Manage Sales Inquiry',
        },
        {
          key: '14',
          label: 'Edit Sales Inquiry',
        },
      ],
    },
    
    {
        key: '2',
        label: 'Sales Quote',
        children: [
          {
            key: '21',
            label: 'Option 1',
          },
          {
            key: '22',
            label: 'Option 2',
          },
          {
            key: '23',
            label: 'Option 3',
          },
          {
            key: '24',
            label: 'Option 4',
          },
        ],
      },
    
      {
      key: '3',
      label: 'Sales Order',
      children: [
        {
          key: '31',
          label: 'Option 1',
        },
        {
          key: '32',
          label: 'Option 2',
        },
        {
          key: '33',
          label: 'Option 3',
        },
        {
          key: '34',
          label: 'Option 4',
        },
      ],
    },

    {
        key: '4',
        label: 'Package',
        children: [
          {
            key: '41',
            label: 'Option 1',
          },
          {
            key: '42',
            label: 'Option 2',
          },
          {
            key: '43',
            label: 'Option 3',
          },
          {
            key: '44',
            label: 'Option 4',
          },
        ],
      },

      {
        key: '5',
        label: 'Shipment',
        children: [
          {
            key: '51',
            label: 'Option 1',
          },
          {
            key: '52',
            label: 'Option 2',
          },
          {
            key: '53',
            label: 'Option 3',
          },
          {
            key: '54',
            label: 'Option 4',
          },
        ],
      },

      {
        key: '6',
        label: 'Sales Invoice',
        children: [
          {
            key: '61',
            label: 'Option 1',
          },
          {
            key: '62',
            label: 'Option 2',
          },
          {
            key: '63',
            label: 'Option 3',
          },
          {
            key: '64',
            label: 'Option 4',
          },
        ],
      },

      {
        key: '7',
        label: 'Sales Payments',
        children: [
          {
            key: '71',
            label: 'Option 1',
          },
          {
            key: '72',
            label: 'Option 2',
          },
          {
            key: '73',
            label: 'Option 3',
          },
          {
            key: '74',
            label: 'Option 4',
          },
        ],
      },

      {
        key: '8',
        label: 'Credit Memo',
        children: [
          {
            key: '81',
            label: 'Option 1',
          },
          {
            key: '82',
            label: 'Option 2',
          },
          {
            key: '83',
            label: 'Option 3',
          },
          {
            key: '84',
            label: 'Option 4',
          },
        ],
      },

      {
        key: '9',
        label: 'Sales Support',
        children: [
          {
            key: '91',
            label: 'Option 1',
          },
          {
            key: '92',
            label: 'Option 2',
          },
          {
            key: '93',
            label: 'Option 3',
          },
          {
            key: '94',
            label: 'Option 4',
          },
        ],
      },

      

  ];

  const item2 = [
    {
      key: '1',
      label: 'Suppliers',
      children: [
        {
          key: '11',
          label: 'Option 1',
        },
        {
          key: '12',
          label: 'Option 2',
        },
        {
          key: '13',
          label: 'Option 3',
        },
        {
          key: '14',
          label: 'Option 4',
        },
      ],
    },
    
    {
        key: '2',
        label: 'Purchase Request',
        children: [
          {
            key: '21',
            label: 'Option 1',
          },
          {
            key: '22',
            label: 'Option 2',
          },
          {
            key: '23',
            label: 'Option 3',
          },
          {
            key: '24',
            label: 'Option 4',
          },
        ],
      },
    
      {
      key: '3',
      label: 'RFQ',
      children: [
        {
          key: '31',
          label: 'Option 1',
        },
        {
          key: '32',
          label: 'Option 2',
        },
        {
          key: '33',
          label: 'Option 3',
        },
        {
          key: '34',
          label: 'Option 4',
        },
      ],
    },

    {
        key: '4',
        label: 'Goods Receipt Notes (GRN)',
        children: [
          {
            key: '41',
            label: 'Option 1',
          },
          {
            key: '42',
            label: 'Option 2',
          },
          {
            key: '43',
            label: 'Option 3',
          },
          {
            key: '44',
            label: 'Option 4',
          },
        ],
      },

      {
        key: '5',
        label: 'Purchase Invoice',
        children: [
          {
            key: '51',
            label: 'Option 1',
          },
          {
            key: '52',
            label: 'Option 2',
          },
          {
            key: '53',
            label: 'Option 3',
          },
          {
            key: '54',
            label: 'Option 4',
          },
        ],
      },

      {
        key: '6',
        label: 'Purchase Payments',
        children: [
          {
            key: '61',
            label: 'Option 1',
          },
          {
            key: '62',
            label: 'Option 2',
          },
          {
            key: '63',
            label: 'Option 3',
          },
          {
            key: '64',
            label: 'Option 4',
          },
        ],
      },

      {
        key: '7',
        label: 'Debit Memo',
        children: [
          {
            key: '71',
            label: 'Option 1',
          },
          {
            key: '72',
            label: 'Option 2',
          },
          {
            key: '73',
            label: 'Option 3',
          },
          {
            key: '74',
            label: 'Option 4',
          },
        ],
      },

      {
        key: '8',
        label: 'Landed Cost',
        children: [
          {
            key: '81',
            label: 'Option 1',
          },
          {
            key: '82',
            label: 'Option 2',
          },
          {
            key: '83',
            label: 'Option 3',
          },
          {
            key: '84',
            label: 'Option 4',
          },
        ],
      },

  ];

  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };
  const levelKeysItems = getLevelKeys(items);
const levelKeysItem1 = getLevelKeys(item1);
const levelKeysItem2 = getLevelKeys(item2);


const SideBar = (props) => {

    const {setClose , close}  = props;
    const [stateOpenKeys1, setStateOpenKeys1] = useState(['2', '23']);
    const [stateOpenKeys2, setStateOpenKeys2] = useState(['2', '23']);
    const [stateOpenKeys3, setStateOpenKeys3] = useState(['2', '23']);

    const onOpenChange1 = (openKeys) => {
      const currentOpenKey = openKeys.find((key) => stateOpenKeys1.indexOf(key) === -1);
      // open
      if (currentOpenKey !== undefined) {
        const repeatIndex = openKeys
          .filter((key) => key !== currentOpenKey)
          .findIndex((key) => levelKeysItems[key] === levelKeysItems[currentOpenKey]);
        setStateOpenKeys1(
          openKeys
            // remove repeat key
            .filter((_, index) => index !== repeatIndex)
            // remove current level all child
            .filter((key) => levelKeysItems[key] <= levelKeysItems[currentOpenKey]),
        );
      } else {
        // close
        setStateOpenKeys1(openKeys);
      }
    };
    const {data: moduleList} = useModuleList()

    console.log(moduleList ,"moduleList")
    const onOpenChange2 = (openKeys) => {
        const currentOpenKey = openKeys.find((key) => stateOpenKeys2.indexOf(key) === -1);
        // open
        if (currentOpenKey !== undefined) {
          const repeatIndex = openKeys
            .filter((key) => key !== currentOpenKey)
            .findIndex((key) => levelKeysItem1[key] === levelKeysItem1[currentOpenKey]);
          setStateOpenKeys2(
            openKeys
              // remove repeat key
              .filter((_, index) => index !== repeatIndex)
              // remove current level all child
              .filter((key) => levelKeysItem1[key] <= levelKeysItem1[currentOpenKey]),
          );
        } else {
          // close
          setStateOpenKeys2(openKeys);
        }
      };

      const onOpenChange3 = (openKeys) => {
        const currentOpenKey = openKeys.find((key) => stateOpenKeys3.indexOf(key) === -1);
        // open
        if (currentOpenKey !== undefined) {
          const repeatIndex = openKeys
            .filter((key) => key !== currentOpenKey)
            .findIndex((key) => levelKeysItem2[key] === levelKeysItem2[currentOpenKey]);
          setStateOpenKeys3(
            openKeys
              // remove repeat key
              .filter((_, index) => index !== repeatIndex)
              // remove current level all child
              .filter((key) => levelKeysItem2[key] <= levelKeysItem2[currentOpenKey]),
          );
        } else {
          // close
          setStateOpenKeys3(openKeys);
        }
      };
    return (
    <div className={`sideBar ${props.close ? 'collapsed' : ''}`}>
    <div className="menuItem">
    <div className="getStarted">
    {!props.close && <h4>GET STARTED</h4>}
    
        <img
        src={props.close ? ExpandIcon?.src : CollapseIcon?.src} 
        alt=''
        onClick={()=>{
          
          setClose(!close)

          

        }}
        className={props.close ? 'expand-icon' : 'collapse-icon'}
        style={{ cursor: 'pointer' }}
      />
        
        </div>
        {!props.close && (
        <Menu className="menu"
      mode="inline"
      defaultSelectedKeys={['231']}
      openKeys={stateOpenKeys1}
      onOpenChange={onOpenChange1}
     
      items={items}
    />)}
 
    </div>
      {(moduleList||[]).map((item, index) => (
        <React.Fragment key={index}>
          <div className="menuItem">
            <div className="getStarted">
          <h4>  {item.name}</h4>
            </div>
            
            <Menu className="menu"
      mode="inline"
      defaultSelectedKeys={['231']}
      openKeys={stateOpenKeys2}
      onOpenChange={onOpenChange2}
     
      items={item.subModules}
    />
          </div>
        </React.Fragment>
      ))}
   
  <Divider />
  
 </div>
 );
};

export default SideBar;