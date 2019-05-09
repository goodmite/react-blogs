import * as React from 'react';
import './Login.scss';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import {FormEvent} from "react";
import {Redirect} from "react-router";



class Login extends React.Component<any, any> {
  state = {
    navigate: false
  };
  handleSubmit = (e: FormEvent<any>) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form1: ', values);
        this.setState({navigate:true});
      }
    });
  };

  render() {
    if (this.state.navigate) {
      return <Redirect to='/dashboard'/>
    }

    const { getFieldDecorator } = this.props.form;
    return (
      <div className={'login-wrapper'}>

        <Form onSubmit={this.handleSubmit} className="login-form">
          <h3 className="heading">Login</h3>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}




export const WrappedLoginComponent = Form.create({ name: 'normal_login' })(Login);

