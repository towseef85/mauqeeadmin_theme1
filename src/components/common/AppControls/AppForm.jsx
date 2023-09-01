import React, { useState } from "react";
import { Button, Form, Space, message } from "antd";
import { PageContainer } from "@ant-design/pro-components";
import {
  CloseOutlined,
  PlusCircleOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ApiServices from "../../../services/ApiService";
import { v4 as uuid } from "uuid";

export default function AppForm({
  getValues,
  labelCol = 8,
  wrapperCol = 16,
  children,
  controller,
  name,
  id,
  title,
  buttonTitle,
  setFields,
  hasSubmit = false,
  onsubmit,
  ...rest
}) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [formName] = Form.useForm();
  const onFinish = async (values) => {
    if (hasSubmit) {
      return onsubmit(values);
    }
    if (id) {
      let newValues = { ...values, ...getValues, id: id };
      await ApiServices.update(`${controller}/${id}`, newValues)
        .then((res) => {
          if (res.status === 200) {
            formName.resetFields();
            navigate(-1);
            message.success("Data updated successfully!");
            setLoading(false);
          }
        })
        .catch((err) => {
          message.error(`Unable to Update error = ${err.response.data}`);
          setLoading(false);
        });
    } else {
      let newValues = { ...values, ...getValues, id: uuid() };
      await ApiServices.create(controller, newValues, formName);
      setLoading(false);
    }
  };
  const onFinishFailed = (error) => {
    message.error(`Please Enter all required fields ${error}`);
  };
  if (id && setFields) formName.setFieldsValue(setFields);
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
      <PageContainer
        header={{
          title: id ? `Update ${name}` : `Add ${name}`,

          extra: [
            <Space>
              <Button
                htmlType="submit"
                icon={<PlusCircleOutlined />}
                type="primary"
                loading={loading}
              >
                {id ? `Update ${name}` : `Add ${name}`}
              </Button>
              <Button
                icon={<RollbackOutlined />}
                onClick={() => formName.resetFields()}
                type="default"
                disabled={id}
                loading={loading}
              >
                Reset
              </Button>
              <Button
                icon={<CloseOutlined />}
                onClick={() => navigate(-1)}
                type="primary"
                loading={loading}
                danger
              >
                Cancel
              </Button>
            </Space>,
          ],
        }}
      >
        {children}
      </PageContainer>
    </Form>
  );
}
