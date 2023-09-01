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
import AppControls from "../../../../components/common/AppControls";
import { AppDeleteButton } from "../../../../components/common/AppListViewScreen/AppListButtons";

export default function AddProductAttribute({ openPopUp, setOpenPopUp }) {
  const { AppSwitchControl, AppInputNumberControl, AppInputControl } =
    AppControls;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [productAttributeForm] = Form.useForm();
  const [attributesValuesForm] = Form.useForm();
  const [attributeValues, setAttributeValues] = useState([]);
  const [formrest, setformrest] = useState(false);
  const onFinish = () => {
    setConfirmLoading(true);
    if (attributeValues.length < 1)
      return message.error("Please Add Attribute Values!");
    productAttributeForm
      .validateFields()
      .then(async (values) => {
        debugger;
        let newValues = {
          ...values,
          id: uuid(),
          attributeValues: attributeValues,
        };
        await ApiServices.create(
          "ProductAttribute",
          newValues,
          productAttributeForm
        );
        setConfirmLoading(false);
        setAttributeValues([]);
      })
      .catch((err) => console.log(err));
  };
  const onFinishValues = (values) => {
    debugger;
    let newValues = { ...values, id: uuid() };
    console.log("values", newValues);
    setAttributeValues((prev) => [...prev, newValues]);
    attributesValuesForm.resetFields();
  };
  const DeleteAttribute = (id) => {
    const getList = attributeValues.filter((x) => x.id !== id);
    setAttributeValues(getList);
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
        <AppInputControl
          label="Eng Name"
          name="engName"
          required={true}
          min={3}
        />

        <AppInputControl
          label="Other Name"
          name="otherName"
          required={true}
          min={3}
        />
      </Form>
      <Divider>Attribute Values</Divider>
      <Form
        form={attributesValuesForm}
        layout="inline"
        onFinish={onFinishValues}
      >
        <AppInputControl label="Value" name="value" required={true} />

        <AppSwitchControl
          label="Publish"
          name="isActive"
          valuePropName="checked"
          defaultChecked
        />
        <AppInputNumberControl
          label="Display Order"
          name="displayOrder"
          min={1}
          max={1000000}
        />
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
            {
              title: "Action",
              dataIndex: "id",
              key: "id",
              render: (data) => (
                <AppDeleteButton
                  deleteTooltiptitle="Delete Attribute"
                  data={data}
                  onDelete={() => DeleteAttribute(data)}
                />
              ),
            },
          ]}
          dataSource={attributeValues}
        />
      )}
    </Modal>
  );
}
