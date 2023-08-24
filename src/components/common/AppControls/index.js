import React from 'react'
import { Switch, Form } from 'antd'

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

const AppControls ={
    AppSwitchControl
}

export default AppControls;
