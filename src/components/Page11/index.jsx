import React, { Component } from 'react';
import './index.css'

//子组件
class Son extends Component {
  // 判断是否需要更新组件，多用于组件性能优化
  // shouldComponentUpdate(nextProps, nextState) {
  //   //只有当名字不一样的时候才会继续执行更新, 执行render
  //   if (nextProps.son !== this.props.son) {
  //     return true
  //   }
  //   return false
  // }

  render() {
    console.log("--son--render----")
    return <div> Son: {this.props.son}</div>
  }
}


//父组件，传给子组件一个on的prop
class Page11 extends Component {
  state = {
    name: 'scarlet',
    son: 2
  }
  componentDidMount() {
    let i = 10;
    // let i = 11;
    setInterval(() => {
      if (i % 5 === 0) {
        console.log("-------------------------", i)
        this.setState({
          name: 'candy',
          son: 9
        })
      } else {
        this.setState({
          name: this.state.name,
          son: this.state.son
        })
      }
      i++
    }, 1 * 1000)
  }

  // 判断是否需要更新组件，多用于组件性能优化
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextState.name !== this.state.name) {
    //哪怕值改变了，但是我们这里设置了false，照样会不执行
    if (nextState.name === this.state.name) {
      return true
    }
    return false
  }

  render() {
    console.log("--parent--render----")
    return (
      <div className="App">
        <h2>name : {this.state.name}</h2>
        <Son son={this.state.son}></Son>
      </div>
    );
  }
}

export default Page11;




