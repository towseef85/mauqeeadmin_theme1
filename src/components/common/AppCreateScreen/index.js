import React from 'react'
import { CloseOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Card, Col,  Space } from "antd";
import { useNavigate } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';
import './index.style.less'

export default function AppCreateScreen({title, children, handleAdd, loading}) {
  const navigator= useNavigate()
  return (
    <div className="tabled">
      <Col xs={24} xl={24} md={24}></Col>
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
        title={<Space><Button icon={<BiArrowBack style={{fontSize:'20px'}} />} style={{border:'none'}} onClick={()=> navigator(-1)}/> {title}</Space>}
        extra={[
          <Space>
            <Button loading={loading} type="primary" onClick={handleAdd} icon={<SaveOutlined />}>
              Save
            </Button>
            <Button type="primary" loading={loading} onClick={()=> navigator(-1)} icon={<CloseOutlined />}>
              Cancel
            </Button>
          </Space>
        ]}
      >
        
        {children}
      </Card>
    </div>
  )
}
