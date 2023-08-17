
import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import AppSidebar from './AppSidebar';
  import { Layout, Menu, Button, theme } from 'antd';

import './index.style.less'
import AppHeader from './AppHeader';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export default function AppLayout({children}) {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className='app-layout'>
        <AppSidebar collapse={collapsed}/>
    <Layout className='app-layout-main'>
      <AppHeader collapse={collapsed} setCollapse={setCollapsed}/>
      <Content
        className='main-content-view'
      >
        {children}
      </Content>
    </Layout>
  </Layout>
  )
}
