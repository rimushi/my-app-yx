import React, { Component } from 'react'
import './index.css'
import { Button } from 'antd'
import Content  from '../Content'


class Page10 extends Component {  
  constructor(props) {
    super(props);
    this.state = {data: 0};
    this.setNewNumber = this.setNewNumber.bind(this);
  }
  
  setNewNumber() {
    this.setState({data: this.state.data + 1})
  }

  render() {
    return (
      <div>
        <Button onClick = {this.setNewNumber} type="primary">INCREMENT</Button>
        <Content myNumber = {this.state.data}></Content>
      </div>
    );
  }

}

export default Page10

