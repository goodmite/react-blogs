import * as React from 'react';
import './Login.scss';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import {FormEvent} from "react";
import {Redirect} from "react-router";
// import {LoginService} from "./login-service";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActionCreators from '../../reducers/auth';

interface ILoginProps {
  history: any;
  isAuthed: boolean;
  isFetching: boolean;
  error: string;
  fetchAndHandleAuthentication:any;
  form:any
}


class Login extends React.Component<ILoginProps, any> {
  state = {
    navigate: false,
    loading: false,
  };

  componentWillReceiveProps(){
    console.log("this.props", this.props);
  }
  JSON = JSON;

  handleSubmit = (e: FormEvent<any>) => {
    e.preventDefault();
    console.log(this);
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log(this.props.history);
        this.props.fetchAndHandleAuthentication(this.props.history, {"user": values});
      }
    });
  };

  render() {
    if (this.state.navigate) {
      return <Redirect to='/dashboard'/>
    }

    const {getFieldDecorator} = this.props.form;
    return (
      <div className={'login-wrapper'}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h3 className="heading">Login</h3>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{required: true, message: 'Please input your username!'}],
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Email"/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="Password"/>
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
            <Button type="primary" onClick={this.handleSubmit} loading={this.props.isFetching} htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
            {
              this.props.error?(<div className="error-message">
              <span>{this.props.error}</span>
              </div>):""
            }
          </Form.Item>
        </Form>

      </div>
    );
  }
}


// const WrappedLoginComponent = Form.create({name: 'normal_login'})(Login);

export const WrappedLoginComponent = connect(
  (state: any) => {
    console.dir(JSON.stringify(state));
    console.log(state.isFetching);
    return ({ isFetching: state.users.isFetching, error: state.users.error, isAuthed: state.users.isAuthed });
  },
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(Form.create({name: 'normal_login'})(Login));

