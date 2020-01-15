import React, { Component } from 'react'
import './index.css'


class Content extends Component { 

  componentWillMount() {
        console.log('Component WILL MOUNT!')
  }

  componentDidMount() {
        console.log('Component DID MOUNT!')
  }

  //在更新过程，只要是父组件的render函数被调用，在render函数里被渲染的子组件就会经历更新过程，
  //不管父组件传给子组件的props有没有改变，都会触发子组件的componentWillReceiveProps函数
  componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
  }
  
  //在更新过程中，React库首先调用shouldComponentUpdate函数，如果这个函数返回true，
  //那就继续更新过程，接下来调用render，反之则终止此次更新过程
  shouldComponentUpdate(newProps, newState) {
        return true;
  }
  
  //在组件接收到新的props或者state但还没有render时被调用
  componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
  }
  
  //在组件完成更新后立即调用。在初始化时不会被调用。
  componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
  }

  componentWillUnmount() {
         console.log('Component WILL UNMOUNT!')
  }
 
  render() {
    return (
      <div>
        <h3> {this.props.myNumber} </h3>
      </div>
    );
  }
  
}

export default Content

