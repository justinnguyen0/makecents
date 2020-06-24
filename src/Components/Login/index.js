import React from "react";
import logo from '../../Assets/Logo.png';
import { Form, Button, Input } from 'antd';
import fbase from '../../firebase';
import { createToast } from '../../toast';
import "./style.less";

const Login = ({ history }) => {

    const handleLogin = values => {
        // handle login stuff
        fbase.login(values.email, values.password, (data) => {
            history.push("/dashboard");
        }, (error) => {
            createToast(error);
        });
    }

    return (
        <div className="login-container">
            <img alt="Make Cents" src={logo} height="50"></img>
            <div className="login-interface">
                <div className="login-header">
                    <h1>Log In</h1>
                </div>
                <div className="input-container">
                    <Form id="loginform" onFinish={handleLogin}>
                        <div className="input-field">
                            <Form.Item name="email" rules={[
                                {
                                    type: 'email',
                                    message: 'Invalid email!'
                                },
                                {
                                    required: true,
                                    message: 'Please input your email.'
                                }
                            ]}>
                                <Input size="large" placeholder="Email" />
                            </Form.Item>
                        </div>
                        <div className="input-field">
                            <Form.Item name="password" rules={[
                                {
                                    required: true,
                                    message: 'Please input your password.'
                                }
                            ]}>
                                <Input.Password size="large" placeholder="Password" />
                            </Form.Item>
                        </div>
                        <div className="input-button">
                            <Form.Item>
                                <Button shape="round" size="large" htmlType="submit">Log In</Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
