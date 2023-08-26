import React from 'react'
import AppContent from '../../../components/common/AppLayout/AppContent'
import { Card, Col, Row, Space } from 'antd'
import { ApartmentOutlined, DollarOutlined, GiftOutlined, MoneyCollectOutlined, PercentageOutlined, TagsOutlined } from '@ant-design/icons'
import './index.style.less'
import {LiaShippingFastSolid} from 'react-icons/lia'
import { Link } from 'react-router-dom'

export default function ProductSettings() {
  return (
    <AppContent title="Product Settings">
          <div className='mail-detail'>
    <div className="apps-header">
    <h5 className='mb-0 text-truncate'>Product Settings</h5>
    </div>
    <Col span={22} offset={1}>

    <Row gutter={24} style={{marginTop:'40px'}}>
        <Col span={6}>
            <Link to='/productsettings/productattributes'>
            <Card hoverable >
                <Space direction='vertical' className='cart-content'>
                    <ApartmentOutlined />
                    <h4>Product Attributes</h4>
                </Space>
            </Card>
            </Link>
        </Col>
        <Col span={6}>
        <Link to='/productsettings/producttag'>
            <Card  hoverable >
                <Space direction='vertical' className='cart-content'>
                <TagsOutlined />
                    <h4>Product Tags</h4>
                </Space>
        </Card>
            </Link>
        
        </Col>
        <Col span={6}>
        <Link to='/productsettings/taxcategory'>
            <Card  hoverable >
                <Space direction='vertical' className='cart-content'>
                    <PercentageOutlined />
                    <h4>Tax Categories</h4>
                </Space>
            </Card>
            </Link>
        </Col>
        <Col span={6}>
        <Link to='/productsettings/shippingproviders'>
            <Card  hoverable >
                <Space direction='vertical' className='cart-content'>
                    <LiaShippingFastSolid/>
                    <h4>Shipping Providers</h4>
                </Space>
            </Card>
        </Link>
        </Col>
        <Col span={6}>
        <Link to='/productsettings/currencies'>
            <Card  hoverable >
                <Space direction='vertical' className='cart-content'>
                <MoneyCollectOutlined />
                    <h4>Currencies</h4>
                </Space>
            </Card>
            </Link>
        </Col>
        <Col span={6}>
        <Link to='/productsettings/paymentmethods'>
            <Card  hoverable >
                <Space direction='vertical' className='cart-content'>
                <DollarOutlined />
                    <h4>Payment Methods</h4>
                </Space>
            </Card>
            </Link>
        </Col>
        <Col span={6}>
          <Link to='/productsettings/giftcards'>

            <Card  hoverable >
                <Space direction='vertical' className='cart-content'>
                <GiftOutlined />
                    <h4>Gift Cards</h4>
                </Space>
            </Card>
          </Link>
        </Col>
    </Row>
    </Col>
    </div>
    </AppContent>
  )
}
