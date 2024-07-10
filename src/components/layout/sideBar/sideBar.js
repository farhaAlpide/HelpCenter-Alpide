// Components/NavBar.js
"use-client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
//import { Collapse } from 'antd';
import CollapseIcon from '@/images/collapse-icon.svg'
// import CollapseIcon from '../../../images/collapse-icon.svg';
import ExpandIcon from '@/images/expand-icon.svg';

import { useRouter } from 'next/navigation';
import useModuleList from '@/framework/sidebarList/use-moduleList';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu ,Divider} from 'antd';
import { FaChevronDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

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


const SideBar = (props) => {

  const {setClose , close}  = props;
  const [stateOpenKeys1, setStateOpenKeys1] = useState(['2', '23']);
  const [stateOpenKeys2, setStateOpenKeys2] = useState(['2', '23']);
  const [stateOpenKeys3, setStateOpenKeys3] = useState(['2', '23']);

  const [isSticky, setIsSticky] = useState(false);

  const [childOnList, setChildOnList] = useState([]);

  const isChildOn = (id) => childOnList.includes(id);
   const router = useRouter();
  const toggleChild = (id) => {
    setChildOnList((prevList) =>
      prevList.includes(id) ? prevList.filter((itemId) => itemId !== id) : [...prevList, id]
    );
  };

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

    const getSubcategories = (subcategories = [], parentIndex = '0') => {
    console.log("HandBurn",subcategories);

      return subcategories.map((subcategory, i) => {
        const index = `${parentIndex}.${i + 1}`;
        const isSubcategoryOpen = isChildOn(subcategory.id);
    
        // Convert parentIndex to string and calculate the nesting level
        const nestingLevel = parentIndex.toString().split('.').length;
        const marginLeft = 30 + (nestingLevel - 1) * 10; // 30px base margin + 10px for each nesting level
        return (
          <React.Fragment key={index}>
        
                <div 
                style={{ display: 'flex', alignItems: 'center', marginLeft: `${marginLeft}px` }}  
                onClick={() => toggleChild(subcategory.id)}>
                  
                  {subcategory?.subModules && subcategory.subModules.length > 0 && (
                    <span
                      style={{ marginRight: '10px', marginLeft: '-20px' }}
                    >
                      {isSubcategoryOpen ? <FaChevronDown color="#58596C" /> : <FaAngleRight color="#58596C" />}
                    </span>
                  )}
                  <div className='menuName'>{subcategory.name}</div>
                </div>
              
            {isSubcategoryOpen && getSubcategories(subcategory.subModules, index)}
          </React.Fragment>
        );
      });
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
      <div className={`sideBar ${isSticky ? 'sticky' : ''} ${props.close ? 'collapsed' : ''}`}>
        {/* <div className="menuItem">
          <div className="getStarted">
      {!props.close && <h4>GET STARTED</h4>}
      
          
          
          </div>
          {!props.close && (
          <Menu className="menu"
        mode="inline"
        defaultSelectedKeys={['231']}
        openKeys={stateOpenKeys1}
        onOpenChange={onOpenChange1}
      
        items={items}
      />
      
      
      
      )}
  
      </div> */}
      <div onClick={()=>{setClose(!close)}} className='closeButton'>
        <img
            src={props.close ? ExpandIcon?.src : CollapseIcon?.src} 
            alt=''
            
            // className={props.close ? 'expand-icon' : 'collapse-icon'}
          />
      </div>
      {!props.close &&
      <>
        {(moduleList||[]).map((item, index) => (
          <React.Fragment key={index}>
            <div className="menuItem">
              <div className="getStarted">
                <h4> {item.name}</h4>
                
              </div>
              <div className="plus-minus-icon">
                <div>
                  {item.subModules && item.subModules.length > 0 && (item.subModules||[]).map((module, i)=>{
                    return(
                      <>
                      <div className="menuArea" onClick={() => {
                        toggleChild(module.id)
                         router.push(`module/${(module.name||"").replaceAll(' ','-').toLowerCase()}`)
                      }}>
                      {isChildOn(module.id) ? <FaChevronDown color="#58596C" /> : <FaAngleRight color="#58596C" />}
                    <div className='menuName'>{module.name}</div>
                    </div>
                    {isChildOn(module.id) && getSubcategories(module.subModules, index + 1)}
                      </>
                    )
                  })}
                  
                </div>
              </div>
            
            </div>
          </React.Fragment>
        ))}
      </>
  }
    
      </div>
  );
};

export default SideBar;