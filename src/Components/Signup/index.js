import React from "react";
import logo from '../../Assets/Logo.png';
import { Form, Button, Input } from 'antd';
import fbase from '../../firebase';
import { createToast } from '../../toast';
import "./style.less";

const Signup = ({ history }) => {

  const handleSignup = values => {
    // handle signup stuff
    fbase.register(values.name, values.email, values.password, (data) => {
      history.push("/dashboard");
    }, (error) => {
      createToast(error);
    });
  }

  return (
    <div className="signup-container">
      <img alt="Make Cents" src={logo} height="50"></img>
      <div className="signup-interface">
        <div className="signup-header">
          <h1>Sign Up</h1>
        </div>
        <div className="input-container">
          <Form id="signupform" onFinish={handleSignup}>
            <div className="input-field">
              <Form.Item
                name="name" rules={[{ required: true, message: 'Please input your name.' }]}
              >
                <Input size="large" placeholder="Name" />
              </Form.Item>
            </div>
            <div className="input-field">
              <Form.Item name="email" rules={[
                {
                  type: 'email',
                  message: 'Invalid email!'
                },
                {
                  required: true,
                  message: 'Please input a valid email.'
                }
              ]}>
                <Input size="large" placeholder="Email" />
              </Form.Item>
            </div>
            <div className="input-field">
              <Form.Item name="password" rules={[
                {
                  required: true,
                  message: 'Please input a valid password.'
                }
              ]}>
                <Input.Password size="large" placeholder="Password" />
              </Form.Item>
            </div>
            <div className="input-field">
              <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password.',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('The two passwords that you entered do not match.');
                    },
                  }),
                ]}
              >
                <Input.Password size="large" placeholder="Confirm Password" />
              </Form.Item>
            </div>
            <div className="input-button">
              <Form.Item>
                <Button shape="round" size="large" htmlType="submit">Sign Up</Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
