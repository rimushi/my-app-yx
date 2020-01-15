import React, { Component } from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import './index.css'

//给表单定义样式
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

class MyFirstForm extends Component {
  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });  
  }; 
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form.Item {...formItemLayout} label="名字">
          {getFieldDecorator('name', {
            rules: [
              { required: true, message: '请输入你的名字' }
            ],
          })(<Input placeholder="请输入你的名字" />)}
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button onClick={this.check}>
            确定
          </Button>
        </Form.Item>
      </div>
    );
  }
}


class MySecondForm extends Component { 
  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });  
  }; 
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form.Item {...formItemLayout} label="昵称">
          {getFieldDecorator('nickname', {
            rules: [
              { required: true, message: '请输入你的昵称' }
            ],
          })(<Input placeholder="请输入你的昵称" />)}
        </Form.Item>
         <Form.Item {...formTailLayout}>
          <Button onClick={this.check}>
            确定
          </Button>
        </Form.Item>
      </div>
    );
  }
}


const Form1 = Form.create()(MyFirstForm)
const Form2 = Form.create()(MySecondForm);


class Page15 extends React.Component{
  reset = () => {  
    this.form1.props.form.resetFields();
    this.form2.props.form.resetFields();
  };
  render() {
    return (
      <div>
          <Form1 wrappedComponentRef={(form)=>this.form1=form}></Form1>
          <Form2 wrappedComponentRef={(form)=>this.form2=form}></Form2>
          <div>
            <Row>
              <Col span={8} offset={4}>
                <Button type="primary" onClick={this.reset}>
                  重置所有
                </Button>
              </Col>           
            </Row>       
          </div>  
      </div>
    )
  }
}


export default Page15;
// 经过 Form.create 包装的组件将会自带 this.props.form 属性，this.props.form 提供的 API 如下：
// 注意：使用 getFieldsValue getFieldValue setFieldsValue 等时，应确保对应的 field 已经用 
// getFieldDecorator 注册过 你不应该用 setState，可以使用 this.props.form.setFieldsValue 来动态改变表单值。
