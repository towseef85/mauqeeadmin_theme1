import Sider from 'antd/es/layout/Sider'
import React from 'react'
import './index.style.less'
import { Menu } from 'antd';
import {
  BoldOutlined,
  BookOutlined,
  CommentOutlined,
  ContactsOutlined,
  ContainerOutlined,
  CrownOutlined,
  GiftOutlined,
  HomeOutlined,
  IdcardOutlined,
  LaptopOutlined,
  LayoutOutlined,
  MehOutlined,
  NodeExpandOutlined,
  NotificationOutlined,
  OrderedListOutlined,
  PercentageOutlined,
  PicRightOutlined,
  QuestionCircleOutlined,
  RollbackOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  SkinOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';




export default function AppSidebar({collapse}) {
  const { t } = useTranslation();

  const items =[
    {
      key: 1,
      icon: <HomeOutlined />,
      label:<NavLink to=''>{t('dashboard')}</NavLink> ,
    },
    {
      key: 2,
      icon: <BookOutlined/>,
      label:t('catalog') ,
      children:[
       {
         key:'products',
         icon:<LaptopOutlined/>,
         label:'Products'
       },
       
       {
         key:'Categories',
         icon:<SkinOutlined />,
         label:<NavLink to='/catalog/category'>Categories</NavLink>
       },
       {
         key:'brands',
         icon:<BoldOutlined />,
         label:<NavLink to='/catalog/brands'>Brands</NavLink>
       },
       {
         key: 'psettings',
         icon:<LaptopOutlined/>,
         label:<NavLink to='/catalog/product/settings'>Product Settings</NavLink>
       }
      ]
    },
    {
      key: '3',
      icon: <CrownOutlined />,
      label: 'Sales',
      children:[
       {
         key:'orders',
         icon:<OrderedListOutlined />,
         label:<NavLink to='/sales/orders'>Orders</NavLink>
       },
       {
         key:'shipping',
         icon:<ShoppingCartOutlined />,
         label:'Shipments'
       },
       {
         key:'returns',
         icon:<RollbackOutlined />,
         label:'Returns'
       }
      ]
    },
    {
     key: '4',
     icon: <IdcardOutlined />,
     label: 'Customers',
     children:[
      {
        key:'customer',
        icon:<MehOutlined />,
        label:'Customers'
      },
      {
        key:'reviews',
        icon:<CommentOutlined />,
        label:'Reviews'
      },
      {
        key:'activity',
        icon:<ContainerOutlined />,
        label:'Activity Logs'
      }
     ]
   },
   {
     key: '5',
     icon: <IdcardOutlined />,
     label: 'Promotions',
     children:[
      {
        key:'gift',
        icon:<GiftOutlined/>,
        label:'Gift Cards'
      },
      {
        key:'discounts',
        icon:<PercentageOutlined />,
        label:'Discounts'
      }
     ]
   },
   {
     key: '6',
     icon: <LayoutOutlined />,
     label: 'Content Management',
     children: [
       {
         key: 'Slider',
         icon: <PicRightOutlined />,
         label: 'Slider'
       },
       {
         key: 'Offers',
         icon:<NotificationOutlined/>,
         label: "Offers",
       },
       {
         key: 'Services',
         icon:<NodeExpandOutlined />,
         label: "Services",
       },
       {
         key: 'contact',
         icon:<ContactsOutlined />,
         label: "Contact Us",
       },
     ]
   },
   {
     key: '7',
     icon: <SettingOutlined />,
     label: 'Settings',
     children:[
      {
        key:'store',
        icon:<ShopOutlined />,
        label:'Store'
      },
      {
        key:'users',
        icon:<UsergroupAddOutlined />,
        label:'Users'
      }
     ]
   },
   {
     key: '8',
     icon: <QuestionCircleOutlined />,
     label: 'Help',
   }
  ]
  return (
     <Sider breakpoint='md' className='app-main-sidebar' trigger={null} collapsible collapsed={collapse}>
     {collapse ? "MS" : <img src='/images/logo.png' className='logo'/>}
     <Menu
     className='app-main-sidebar-menu'
       theme="light"
       mode="inline"
       defaultSelectedKeys={['1']}
       items={items}
     />
   </Sider>
  )
}
