import React from 'react'
import { Layout , Space, Divider, Button, Badge} from 'antd'
import './index.style.less'
import {BellOutlined, MenuFoldOutlined} from '@ant-design/icons'
import LangSwitcher from './components/LangSwitcher';
import AppUserInfo from './components/AppUserInfo';
import AppNotifications from './components/AppNotifications';





export default function AppHeader({setCollapse, collapse}) {
  const {Header} = Layout;

  return (
    <Header className='app-header'>
      <a className="trigger" onClick={()=> setCollapse(!collapse)}>
      <MenuFoldOutlined />
      </a>
      <div className="header-search"></div>
      <div className="app-header-sectionDesktop">
        <Space size='small'>
      <AppNotifications/>
     <LangSwitcher/>
     <AppUserInfo/>
        </Space>
      </div>
    </Header>
  )
}
