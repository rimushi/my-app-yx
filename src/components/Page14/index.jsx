import React, { Component } from 'react';
import './index.css'

//父组件，传给子组件一个on的prop
class Page14 extends Component {
  // 用于初始化 state
  constructor(props) {
    super(props);
    this.state = {};   
  }
  // 用于替换 `componentWillReceiveProps` ，该函数会在初始化和 `update` 时被调用
  // 因为该函数是静态函数，所以取不到 `this`
  // 如果需要对比 `prevProps` 需要单独在 `state` 中维护
  // 表示“从props中获取state”和“传入的props映射到state上面”可以字面上理解（从Props中取得驱动数据DerivedState）
  // (后续需要实例demo验证)
  static getDerivedStateFromProps(nextProps, prevState) {}

  // 组件挂载后调用
  // 可以在该函数中进行请求或者订阅
  componentDidMount() {}

  // 判断是否需要更新组件，多用于组件性能优化
  shouldComponentUpdate(nextProps, nextState) {}
  // 组件更新后调用
  componentDidUpdate() {} 

  // 用于获得最新的 DOM 数据 (后续需要实例demo验证)
  getSnapshotBeforeUpdate() {}

  // 组件即将销毁
  // 可以在此处移除订阅，定时器等等
  componentWillUnmount() {}
  // 组件销毁后调用
  componentDidUnMount() {}
  
  // 渲染组件函数
  render() {
    return (<div></div>)
  }
}

export default Page14


// 一些生命周期方法正在被弃用，因为它们鼓励了不安全的编码实践。如下
// componentWillMount
// componentWillReceiveProps
// componentWillUpdate
// UNSAFE_ 前缀将在以后的版本中添加。（方便记忆：will涉及的有三个都弃用，剩有componentWillUnmount没有弃用）

