import React from 'react'
import { Switch, Form, InputNumber } from 'antd'

const AppSwitchControl=({label, name, valuePropName,initialValue=true, ...rest})=>{
    return(
        <Form.Item
        label={label}
        name={name}
        valuePropName={valuePropName}
        initialValue={initialValue}
       
      >
        <Switch
          checkedChildren="Yes"
          unCheckedChildren="No"
          {...rest}
        />
      </Form.Item>
    )

}

const AppInputNumberControl=({label, name, min=1,max=10, defaultValue=1, required, ...rest })=>{
return(
  <Form.Item
  label={label}
  name={name}
  hasFeedback
  rules={[
    {
      required: required,
      message: `Please Enter ${label}`,
    }
  ]}
  {...rest}
>
  <InputNumber min={min} max={max} defaultValue={defaultValue}/>
  </Form.Item>
)
}

const AppControls ={
    AppSwitchControl,
    AppInputNumberControl
}

export default AppControls;
