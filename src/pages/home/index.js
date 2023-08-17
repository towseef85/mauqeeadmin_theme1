import { Col, Row } from 'antd'
import React from 'react'
import {AreaChartOutlined, DotChartOutlined, LineChartOutlined, MailOutlined} from '@ant-design/icons'
import SalesState from './components/SalesState'
import AppContent from '../../components/common/AppLayout/AppContent'

const salesState= [
  {
    id: 1,
    type: 'Total Sale',
    value: '3,256',
    bgColor: '#0A8FDC',
    icon: <LineChartOutlined />,
  },
  {
    id: 2,
    type: 'Last Month Sale',
    value: '6,257',
    bgColor: '#49BD65',
    icon: <DotChartOutlined />,
  },
  {
    id: 3,
    type: 'Total Revenue',
    value: '$34,650',
    bgColor: '#9E49E6',
    icon: <AreaChartOutlined />,
  },
  {
    id: 4,
    type: 'Total Email Sent',
    value: '11,320',
    bgColor: '#3A3849',
    icon: <MailOutlined />,
  },
]

export default function Dashboard() {
  return (
    <AppContent title="Dashboard">
    <Row gutter={[40, 40]}>
    {salesState.map((data) => (
            <Col xs={24} sm={12} lg={6} key={'a' + data.id}>
              <SalesState data={data} />
            </Col>
          ))}
    </Row>
    </AppContent>
  )
}
