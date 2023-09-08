import { Modal } from 'antd'
import React from 'react'

export default function AppModel({open, onCancel, onOk, confirmLoading, children, title, ...rest}) {
  return (
    <Modal
    open={open}
    centered
    onCancel={onCancel}
    title={title}
    onOk={onOk}
    confirmLoading={confirmLoading}
    {...rest}
  >
    {children}
    </Modal>
  )
}
