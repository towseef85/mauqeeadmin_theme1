import React from 'react'
import './index.style.less'
import { Button, Table, Input, Space } from "antd";
import { BackwardOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function AppListViewScreen({
    btntitle,
  onClick,
  data,
  columns,
  hoverColor,
  className,
  icon,
  page,
  onChange,
  pagination,
  hasbackButton = false,
  ...rest
}) {
    const navigator = useNavigate()
    const columnsList =[{
        title:'#',
        dataIndex:'id',
        render:(j,i, index)=>(
            <>{index+1}</>
        )
        
      },
      ...columns
        
      ]
  return (
    <>
     <div className="apps-header">
        <div className="order-header">
          <div className="order-header-input-view">
            <Input type="search" />
          </div>
          <div className="order-header-right">
            <Space>

            <Button
              type="primary"
              onClick={onClick}
              icon={icon ? icon : <PlusCircleOutlined />}
            >
              {btntitle}
            </Button>
            {
              hasbackButton &&

            <Button
              type="default"
              onClick={()=>navigator(-1)}
              icon={<BackwardOutlined/>}
              >
                Go Back
              </Button>
            }
            </Space>

          
          </div>
        </div>
      </div>
      <div
        style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}
        className="apps-content-container"
      >
        <Table rowKey="id" 
        className='table-responsive' 
        columns={columnsList} 
        dataSource={data}
        {...rest}
        
        />
      </div>
    </>
  )
}
