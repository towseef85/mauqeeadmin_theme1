import React from 'react'
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Button, Form, Space, message } from 'antd'

export default function AppFormControl({formName, children, title,id, loading, labelCol = 8,
    wrapperCol = 16,
    controller,
    action=POST_DATA,
    otherValues=null,
    hasCondition = false,
    conditionMessage = null,
    additionButton = null}) {
  return (
    <Form
    name="basic"
    form={formName}
    onFinish={onFinish}
    disabled={loading}
    onFinishFailed={onFinishFailed}
    labelCol={{
      span: labelCol,
    }}
    wrapperCol={{
      span: wrapperCol,
    }}
    autoComplete="off"
  >
    </Form>
  )
}
