import React from 'react'
import { CloseOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Space } from "antd";
import './index.style.less'

export default function CreateScreen({title, children}) {
  return (
    <div className="tabled">
      <Col xs={24} xl={24} md={24}></Col>
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
        title={title}
        extra={[
          <Space>
            <Button type="primary" icon={<SaveOutlined />}>
              Save
            </Button>
            <Button type="primary" icon={<CloseOutlined />}>
              Cancel
            </Button>
          </Space>,
        ]}
      >
        {children}
      </Card>
    </div>
  )
}
