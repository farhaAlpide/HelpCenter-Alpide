import React from 'react';
import { Breadcrumb } from 'antd';

const App = () => (
  <div className="breadcrumb">
  <Breadcrumb
    separator=">"
    items={[
      // {
      //   title: 'Home',
      // },
      {
        title: 'Help Center',
        href: '',
      },
      {
        title: 'Sales Module',
        href: '',
      },
      {
        title: 'Sales Inquiry',
      },
    ]}
  />
  </div>
);
export default App;