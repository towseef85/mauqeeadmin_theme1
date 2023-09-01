import React from 'react'
import { Switch, Form, InputNumber, Upload, Button, Input } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

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
  initialValue={defaultValue}
  hasFeedback
  rules={[
    {
      required: required,
      message: `Please Enter ${label}`,
    }
  ]}
  {...rest}
>
  <InputNumber min={min} max={max}/>
  </Form.Item>
)
}

const AppInputControl=({
  name,
  label,
  min,
  required = false,
  type = "text",
  isTextArea = false,
  rows = 2,
  ...rest
})=>{
  return (
    <Form.Item
      label={label}
      name={name}
      hasFeedback
      rules={[
        {
          required: required,
          message: `Please Enter ${label}`,
        },
        {
          min: min ? min : "",
          message: `Please Enter Atleast ${min} Charactars`,
        },
      ]}
      {...rest}
    >
      {isTextArea ? (
        <Input.TextArea rows={rows} placeholder={`Please Enter ${label}`} />
      ) : (
        <Input type={type} placeholder={`Please Enter ${label}`} />
      )}
    </Form.Item>
  );
}

const AppUploadControl=({
  label,
  name = "imageData",
  required,
  fileList,
  setFileList,
  hasRecord,
  imageData,
})=> {
  if (hasRecord) setFileList(imageData);
  return (
    <Form.Item
      label={label}
      name={name}
      extra="Image size should not exceed more than 2 MB"
      valuePropName="fileList"
      getValueFromEvent={(e) => {
        return e?.fileList;
      }}
      rules={[
        {
          required: required,
          message: "Please Upload Image",
        },
        {
          validator(_, fileList) {
            return new Promise((resolve, reject) => {
              if (fileList && fileList[0]?.size > 300000) {
                reject("File size exceeded");
              } else {
                resolve("success");
              }
            });
          },
        },
      ]}
    >
      {/* <input
      value={fileList}
      type="file"
      ref={uploadref}
      accept=".jpeg,.png,.jpg"
    /> */}
      <Upload
        maxCount={1}
        fileList="picture-card"
        accept=".jpg,.jpeg,.png"
        beforeUpload={(file) => {
          if (file.size > 300000) {
            console.log("File size exceeded");
            return false;
          } else {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              setFileList(fileReader.result);
            };
            fileReader.onerror = (error) => {
              console.log(error);
            };
            return false;
          }
        }}
        onRemove={(file) => {
          setFileList(null);
        }}
      >
        <Button icon={<UploadOutlined />}>
          {imageData ? "Change Image" : "Upload Image"}
        </Button>
      </Upload>
    </Form.Item>
  );
}

const AppControls ={
    AppSwitchControl,
    AppInputNumberControl,
    AppInputControl,
    AppUploadControl
}

export default AppControls;
