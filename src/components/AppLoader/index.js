import React from 'react'
import './index.style.less'
import {Spin} from 'antd';

export default function AppLoader() {
  return (
    <div className='app-loader'>
    <Spin />
  </div>
  )
}
