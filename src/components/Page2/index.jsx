import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
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
class Page2 extends Component {
  state = {
    checkNick: false,
  };

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        const valus= this.props.form.getFieldsValue();      
        //获取一组输入控件的值，如不传入参数，则获取全部组件的值
        console.info(valus);
      }
    });
  };

  handleChange = e => {
    // 你还可以给setState传递一个函数作为第二个参数，这个函数会在状态更新完毕后得到执行。
    // 请记住由于单个块内的所有更新会被合并成一个，这将导致每个setState中的回调中得到的state值是全更新的state。
    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        // force 对已经校验过的表单域，在 validateTrigger 再次被触发时是否再次校验
        this.props.form.validateFields(['nickname'], { force: true });
      },
    );
  };

  compareValidator = (rule, value, callback) => {
    // const { form } = this.props;
    // if (value && value === form.getFieldValue('nickname')) {
    //   callback('不能与昵称一致!');
    // } else {
    //   callback();
    // }
    var pattern = /^[0-9a-zA-Z]*$/;
    if (!pattern.test(value)) {
      callback(new Error('请输入字母和数字格式'));
    } else {
      callback();
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form.Item {...formItemLayout} label="名字">
          {getFieldDecorator('username', {
            rules: [
              { required: true,message: '请输入你的名字' },
              { max: 5, message: '最多5个字符', trigger: 'change' },      
              { pattern: /^[0-9a-zA-Z]*$/, message: '请输入字母和数字格式', trigger: 'change' },  
              //自定义校验
              // { validator: this.compareValidator, trigger: 'change' }
            ],
          })(<Input placeholder="请输入你的名字" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="昵称">
          {getFieldDecorator('nickname', {
            rules: [
              { required: this.state.checkNick, message: '请输入你的昵称' }
            ],
          })(<Input placeholder="请输入你的昵称" />)}
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Checkbox checked={this.state.checkNick} onChange={this.handleChange}>
            昵称是必填项
          </Checkbox>
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            确定
          </Button>
        </Form.Item>
      </div>
    );
  }
}

export default Form.create()(Page2);
// 经过 Form.create 包装的组件将会自带 this.props.form 属性，this.props.form 提供的 API 如下：
// 注意：使用 getFieldsValue getFieldValue setFieldsValue 等时，应确保对应的 field 已经用 
// getFieldDecorator 注册过 你不应该用 setState，可以使用 this.props.form.setFieldsValue 来动态改变表单值。
