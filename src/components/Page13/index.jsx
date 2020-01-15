import React, { Component } from 'react';
import './index.css'

//引入封装好的自定义组件
import Child from '../Child';

//父组件，传给子组件一个on的prop
class Page13 extends Component {
    constructor (props) {
      super(props);
      this.state={
        bgColor: '#999'
      };
    }
    onBgColorChange(color) {
      this.setState({
        bgColor: color
      })
    }
    render() {
      return (
        <div style={{background:this.state.bgColor}}>
          <Child bgColor={this.state.bgColor} colorChange={(color)=>{this.onBgColorChange(color)}}></Child>
          {/* 子组件像父组件传值，设置回调 */}
        </div>
      );
    }
}

export default Page13
