import React, { Component } from 'react'
import { Checkbox } from 'antd';
import './index.css'

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class Page6 extends Component { 
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  onChange = checkedList => {
    this.setState({
      checkedList: checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      //复选框组显示全选或者全不选
      checkedList: e.target.checked ? plainOptions : [],
      //全选按钮是否显示横线，代表部分选中
      indeterminate: false,
      //全选按钮是否显示对号，代表全选或者全不选
      checkAll: e.target.checked,
    });
  };

  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            //indeterminate状态，只负责样式控制表示选中部分选项的样式显示
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
          <CheckboxGroup
            //options指定可选项 value指定选中的选项 onChange变化时回调函数
            options={plainOptions}
            value={this.state.checkedList}
            onChange={this.onChange}
          />
      </div>
    );
  }
}

export default Page6

