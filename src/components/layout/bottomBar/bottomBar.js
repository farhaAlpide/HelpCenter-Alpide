import React from 'react';
import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Docs Center',
    
  },
  {
    key: '2',
    label: 'Get Started',
    
  },
  {
    key: '3',
    label: 'Help Center',
    
  },
];
const App = () => <Tabs defaultActiveKey="3" items={items} onChange={onChange} />;
export default App;