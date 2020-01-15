import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Route from './router'

//全局设置一些控件的中英文，比如日期
// import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
//antd全局设置
import { ConfigProvider } from 'antd';

// function App() {
//   return (
//       <Route />     
//   );
// }

function App() {
  return (
      <ConfigProvider locale={zhCN}><Route /></ConfigProvider>     
  );
}

export default App;
