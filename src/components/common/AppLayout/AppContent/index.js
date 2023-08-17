import React from 'react'
import './index.style.less'
import { Card } from 'antd'

export default function AppContent({title,children}) {
  return (
    <div className='apps-wrap'>
      <div
      className='apps-wrap-header fullView'
      >
      <h2 className='text-truncate' key='title'>
          {title}
        </h2>
      </div>
      <div className='apps-container'>
      <Card
              bordered={false}
              key='content'
              className='apps-main-content-card'
             >
              {children}
            </Card>
      </div>
    </div>
  )
}
