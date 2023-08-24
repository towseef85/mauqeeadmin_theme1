import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Upload, Form, Button } from "antd";

export default function AppUploadControl({
  label,
  name = "imageData",
  required,
  fileList,
  setFileList,
  hasRecord,
  imageData,
}) {
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
