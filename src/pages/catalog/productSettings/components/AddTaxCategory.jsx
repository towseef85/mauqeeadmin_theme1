import { Button, Form, Modal, message } from "antd";
import React, { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import AppControls from "../../../../components/common/AppControls";
import ApiServices from "../../../../services/api";

export default function AddTaxCategory({
  openPopUp,
  setOpenPopUp,
  getList,
  setId,
  singleTaxCategory,
  SetSingleTaxCategory,
  setSetId,
  confirmLoading,
  setConfirmLoading,
}) {
  const { formref } = useRef();
  const { PostApi, PutApi } = ApiServices;

  const { AppSwitchControl, AppInputControl, AppInputNumberControl } =
    AppControls;
  const [taxCategoryForm] = Form.useForm();
  const onFinish = (values) => {
    setConfirmLoading(true);
    if (setId) {
      let newValues = { ...values, id: setId };
      PutApi(`TaxCategory/${setId}`, newValues, onCancel);
      setConfirmLoading(false);
    } else {
      let newValues = { ...values, id: uuid() };
      PostApi("TaxCategory", newValues, taxCategoryForm);
      setConfirmLoading(false);
    }
  };
  if (setId && singleTaxCategory) {
    debugger;
    taxCategoryForm.setFieldsValue({
      categoryName: singleTaxCategory.categoryName,
      value: singleTaxCategory.value,
      isActive: singleTaxCategory.isActive,
    });
  }
  const onFinishFailed = (err) => {
    console.log("err", err);
  };
  const onCancel = () => {
    setOpenPopUp(false);
    setSetId(null);
    SetSingleTaxCategory(null);
    taxCategoryForm.resetFields();
  };

  return (
    <Modal
      open={openPopUp}
      centered
      onCancel={onCancel}
      title="Add Tax Category"
      onOk={() => taxCategoryForm.submit()}
      width={500}
      confirmLoading={confirmLoading}
    >
      <Form
        name="basic"
        style={{ margin: "30px 0px" }}
        form={taxCategoryForm}
        ref={formref}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        autoComplete="off"
      >
        <AppInputControl
          label="Category Name"
          name="categoryName"
          required={true}
          min={3}
        />
        <AppInputNumberControl
          label="Value"
          name="value"
          min={1}
          max={1000000}
        />
        <AppSwitchControl
          label="Is Active"
          name="isActive"
          valuePropName="checked"
          defaultChecked
        />
      </Form>
    </Modal>
  );
}
