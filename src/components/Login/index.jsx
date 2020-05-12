import React, { Component } from 'react'
//高阶组件中的withRouter, 作用是将一个组件包裹进Route里面, 
// 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中.
// import {withRouter} from 'react-router-dom'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import './index.css'

// @withRouter
class Login extends Component { 
  state = {
    title: ''
  }  
  componentDidMount() {   
    this.setState ({
      title : "欢迎用户登录"       
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.props.history.push('/page');
      }
    });
  }
  render() {   
    const { title } = this.state
    const { getFieldDecorator } = this.props.form;
    return ( 
      <div className="login">          
        <Form onSubmit={this.handleSubmit} className="login-form">
          <div className="login-tip">
            {title}
          </div>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>忘记密码</Checkbox>)}           
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}


//经过Form.create()包装过的组件会自带this.props.form属性，
//this.props.form提供了很多API来处理数据，如getFieldDecorator——用于和表单进行双向绑定等
export default Form.create()(Login)


// 默认情况下必须经过路由匹配渲染的组件才存在this.props,才拥有路由参数，
// 然而不是所有组件都直接与路由相连（通过路由跳转到此组件）的,，
// 当这些组件需要路由参数时，使用withRouter就可以给此组件传入路由参数，
// 将react-router的history、location、match三个对象传入props对象上，此时就可以使用this.props。

// 因为我们这个项目 app.js就是一个包裹的路由组件，所以所有组件包裹成了路由组件，
// 就不需要再单独使用withRouter
// export default Form.create()(withRouter(Login))
// export default withRouter(Form.create()(Login))

//备注这里Form.create()的是antd 3.x.x的是用方式，最新4.x.x已经不这么用