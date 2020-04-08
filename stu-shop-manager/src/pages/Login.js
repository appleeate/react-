import React from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { setToken } from "../utils/auth";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";

function Login(props) {
  const onFinish = (values) => {
    setToken(values.username);
    props.history.push("/admin");
    console.log("Received values of form: ", values);
  };
  return (
    <Card title="QF Admin SYS" className="login-form">
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Login;
