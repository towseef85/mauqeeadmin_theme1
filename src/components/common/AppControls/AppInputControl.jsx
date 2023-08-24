import React from "react";
import { Input, Form } from "antd";

export default function AppInputControl({
  name,
  label,
  min,
  required = false,
  type = "text",
  isTextArea = false,
  rows = 2,
  ...rest
}) {
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
