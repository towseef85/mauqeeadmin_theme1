import React from 'react'
import AppCard from '../../../components/common/AppCard'
import {Typography} from 'antd';
import './index.style.less'

const {Title} = Typography;

export default function SalesState(data) {
const {icon, value, type, bgColor} = data.data;
  return (
    <AppCard
      className='state-card card-hover'
      style={{backgroundColor: bgColor}}>
      <div className='state-row'>
        <div className='state-thumb'>
          {icon}
        </div>
        <div className='state-content'>
          <Title className='text-truncate' level={3}>
            {value}
          </Title>
          <p className='text-truncate'>{type}</p>
        </div>
      </div>
    </AppCard>
  )
}
