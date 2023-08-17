import React from "react";
import { Button, Checkbox, Form, Input, Alert } from "antd";
import {
  useAppActionsContext,
  useAppContext,
} from "../../components/AppContexts/AppContext";

export default function Login() {
  const { signInUser } = useAppActionsContext();
  const { loading, error } = useAppContext();

  return (
    <div className="sign">
      {error && (
        <Alert
          style={{ margin: "10px 0px" }}
          message="Please Check your email and password"
          type="error"
        />
      )}
      <div className="sign-content">
        <Form className="sign-form" name="basic" onFinish={signInUser}>
          <Form.Item
            name="username"
            className="form-field"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input placeholder="UserName" />
          </Form.Item>

          <Form.Item
            name="password"
            className="form-field"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <div className="rememberMe">
            <Checkbox>RememberMe</Checkbox>

            <span className="sign-link">Forget Password</span>
          </div>

          <div className="form-btn-field">
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="sign-btn"
            >
              Login
            </Button>
          </div>

          {/* <div className='form-field-action'>
          <span className='sign-text-grey'>
            <IntlMessages id='common.dontHaveAccount' />
          </span>
          <Link to='/signup' className='underlineNone colorTextPrimary'>
            <IntlMessages id='common.signup' />
          </Link>
        </div> */}
        </Form>
      </div>
    </div>
  );
}
