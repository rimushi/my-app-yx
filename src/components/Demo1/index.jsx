import React, { Component } from 'react'
import { incrementData, decrementData } from '../../store/demo1/action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import './index.css'


class Demo1 extends Component { 
  static propTypes = {
    counter: PropTypes.number
  }
  state = {
    title: ''
  }
  //不是通过react-redux调用dispatch，用普通的this.事件名调用
  //为了不绑定bind(this),用es6来实现
  incrementEvt = () => {
    //触发通过react-redux关联的dispatch事件要用this.props.事件名
    let counter = this.props.counter;
    this.props.onIncrement(counter);
  }
  decrementEvt = () => {
    let counter = this.props.counter;
    this.props.onDecrement(counter);
  }   
  // editTitle = () => {
  //   alert("新标题");
  //   this.setState ({
  //     title : "标题新"       
  //   });
  // }
  componentDidMount() {   
    this.setState ({
      title : "标题"       
    });
  }  
  render() {   
    const { title } = this.state;
    let { counter, str } = this.props;
    return (
       <div className="demo1">
          <div>          
            <div>{ title }</div> 
            <button onClick={this.incrementEvt}>自增</button>
            {/*<button onClick={this.decrementEvt}>自减</button>*/}
            <button onClick={() => this.props.onDecrement(counter)}>自减</button>
            <p>{ counter }</p>
            <p>{ str }</p>           
          </div>        
      </div>
    )
  }
}

//订阅store触发渲染，意思就是把Redux中的数据映射到React中的props中去
const mapStateToProps = (state) => {
  return {
    counter: state.demo1.counter,
    str: state.demo2.str
  }
}
//它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象
//这一步就是通过dispatch触发reducer方法，而action作为其中的参数
//相信这个函数也很好理解，就是把各种dispatch也变成了props让你可以直接使用
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (counter) => dispatch(incrementData(counter)),
    onDecrement: (counter) => dispatch(decrementData(counter))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Demo1)

// react-redux这种思想的深度,整体感觉干净,使得展示组件和容器组件既相互分离又有一定的结合,
// 兼职就是藕断丝连,但是又不会违背组件分离的思想,

// 使用redux时要让所有的子组件都能应用store中的数据，那么所有的组件就都要把store
// 当做props传进来，这也太麻烦了。这个时候就需要React-redux库，就不需要一层层往下发布命令了