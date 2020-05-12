import React, { Component } from 'react'
/*
  componentDidMount和componentDidUpdate区别
*/
import './index.css'

class Page18 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    alert("组件挂载");
    //发现compentDidMount只执行了一次，但是里面的state数据是在变化的
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    alert("组件更新");
    //发现componentDidUpdate在组件更新时执行，同样里面的state数据是在变化的
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }

}

export default Page18;