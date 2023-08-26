import { PlusCircleFilled } from "@ant-design/icons";
import {
  Button,
  Divider,
  Form,
  Input,
  Switch,
  Table,
  Tag,
  message,
} from "antd";
import Modal from "antd/es/modal/Modal";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ApiServices from "../../../../services/ApiService";

export default function AddProductAttribute({ openPopUp, setOpenPopUp }) {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [productAttributeForm] = Form.useForm();
    const [attributesValuesForm] = Form.useForm();
    const [attributeValues, setAttributeValues] = useState([]);
    const onFinish = () => {
        let formreset=false;
        setConfirmLoading(true);
        if (attributeValues.length < 1)
          return message.error("Please Add Attribute Values!");
        productAttributeForm
          .validateFields()
          .then((values) => {
            let newValues = {
              ...values,
              id: uuid(),
              attributeValues: attributeValues,
            };
            ApiServices.create("ProductAttribute",newValues,formreset)
            setConfirmLoading(false);
            if(formreset) productAttributeForm.resetFields()
          })
          .catch((err) => console.log(err));
      };
      const onFinishValues = (values) => {
        let newValues = { ...values, id: uuid() };
        console.log("values", newValues);
        setAttributeValues((prev) => [...prev, newValues]);
        attributesValuesForm.resetFields();
      };
  return (
    <Modal
    open={openPopUp}
    centered
    onCancel={() => setOpenPopUp(false)}
    title="Add Product Attribute"
    onOk={onFinish}
    width={850}
    confirmLoading={confirmLoading}
  >
      <Form
        name="basic"
        style={{ margin: "30px 0px" }}
        form={productAttributeForm}
        onFinish={onFinish}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Eng Name"
          name="engName"
          rules={[
            {
              required: true,
              message: "Please enter Eng Name",
            },
          ]}
        >
          <Input placeholder="Eng Name" />
        </Form.Item>
        <Form.Item
          label="Other Name"
          name="otherName"
          rules={[
            {
              required: true,
              message: "Please enter Other Name",
            },
          ]}
        >
          <Input placeholder="Other Name" />
        </Form.Item>
      </Form>
      <Divider>Attribute Values</Divider>
      <Form
        form={attributesValuesForm}
        layout="inline"
        onFinish={onFinishValues}
      >
        <Form.Item
          label="Value"
          name="value"
          rules={[
            {
              required: true,
              message: "Please Value",
            },
          ]}
        >
          <Input placeholder="Other Value" />
        </Form.Item>
        <Form.Item
          label="Is Active"
          name="isActive"
          valuePropName="checked"
          initialValue
        >
          <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
        </Form.Item>
        <Form.Item label="Display Order" name="displayOrder">
          <Input placeholder="Display Order" />
        </Form.Item>
        <Form.Item noStyle>
          <Button htmlType="submit" icon={<PlusCircleFilled />}>
            Add
          </Button>
        </Form.Item>
      </Form>
      {attributeValues.length > 0 && (
        <Table
          style={{ marginTop: "20px" }}
          columns={[
            {
              title: "#",
              dataIndex: "id",
              render: (j, i, index) => <>{index + 1}</>,
            },
            {
              title: "value",
              dataIndex: "value",
              key: "value",
            },
            {
              title: "Active",
              dataIndex: "isActive",
              key: "isActive",
              render: (data) =>
                data ? <Tag color="blue">Yes</Tag> : <Tag color="red">No</Tag>,
            },
            {
              title: "Order by",
              dataIndex: "displayOrder",
              key: "displayOrder",
            },
          ]}
          dataSource={attributeValues}
        />
      )}
    </Modal>
  )
}
