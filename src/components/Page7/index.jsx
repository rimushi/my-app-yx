import React, { Component } from 'react'
// import { Checkbox, Row, Col, Radio } from 'antd';
import { Checkbox, Radio } from 'antd';
import './index.css'



// function onChangeCheck(checkedValues) {
//   console.log('checked = ', checkedValues);
// }

const plainOptions = ['Apple', 'Pear', 'Orange']; 
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

class Page7 extends Component { 
  state = {
    value: 1,
  };
  onChangeRadio = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <div>     
          {/*以下两种options方式都可实现复选框*/} 
          <Checkbox.Group options={plainOptions} defaultValue={['Apple']}/>          
            <br />
            <br />
          <Checkbox.Group options={optionsWithDisabled} defaultValue={['Pear']} />        
            <br />
            <br />

          {/*Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。
          <Checkbox.Group style={{ width: '100%' }} onChange={onChangeCheck}>
            <Row>
              <Col span={8}>
                <Checkbox value="A">A</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="B">B</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="C">C</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="D">D</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="E">E</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>  
          */}   

          {/*以下两种方式多可实现单选框*/}
          <Radio.Group onChange={this.onChangeRadio} value={this.state.value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group> 
            <br />
            <br />
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>  
      </div>
    )
  }
}

export default Page7

