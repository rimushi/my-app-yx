import React, { Component } from 'react'
// import { demo2Date,axioDate } from '../../store/demo2/action';
import { demo2Date } from '../../store/demo2/action';
// import store from '../../store';
import { connect } from 'react-redux';
// import { Switch,Route } from 'react-router-dom'
// import Demo2Detail  from '.././Demo2Detail'
// import ChildDetail  from '.././ChildDetail'
// import axios from 'axios'
import './index.css'

//===================================== redux的使用 start =======================================
// class Demo2 extends Component { 
  // onChangeName = () => {   
  //   store.dispatch(demo2Date('abc'));  
  //   console.log("A"+store.getState().main.str);
  //   console.log("B"+localStorage.getItem('strStorage'));
  // }   
  // render() { 
  //   return (
  //      <div className="main">
  //         <div>          
  //           <button onClick={this.onChangeName}>追加</button>
  //           <div>{ store.getState().main.str }</div>
  //         </div>
  //     </div>
  //   )
  // }  
// }
// export default Demo2
//===================================== redux的使用 end =======================================

class Demo2 extends Component {  
  componentDidMount() {   
    // axios.get('/list.json').then((res) => {
    //   const data = res.data;      
    //   const action = demo2Date(data)
    //   store.dispatch(action);
    // })

    // thunk使用
    // const action = axioDate();
    // store.dispatch(action);
    

    // 模拟接口的使用
    // const params = {
    //     id: "id",
    // }
    // fetch("/test/profile", {
    //     // method: "POST",
    //     // credentials: 'include',
    //     // headers: {"Content-Type": "application/json"},
    //     // body: JSON.stringify(params)
    // }).then((response) => {
    //     console.log("1");
    //     console.log(response);
    //     console.log("2");
    //     return response.json()
    // }).then((response) => {
    //     console.log("3");
    //     console.log(response)
    //     console.log("4");
    // }).catch((error) => {
    //     console.log(error)
    // })

  }
  render() {
    // 如果用到react-redux这里的就是this.props来包含
    const { value, onChangeName } = this.props   
    return (
        <div style = {{overflow: "hidden", paddingLeft: "100px"}}>          
            <button onClick={onChangeName}>追加</button>
            <div>{ value }</div>
            <div>{this.props.match.path}</div>
            {/* <div>{`${this.props.match.path}`}</div> */} 

            {/* <ChildDetail></ChildDetail>  */}

            {/* <Switch> 
              <Route path={`${this.props.match.path}/detail`} component={Demo2Detail} />
              <Route path={`${this.props.match.path}/:id`} component={Demo2Detail} />
            </Switch> */}            
        </div>
    )
  }
}
//订阅store触发渲染
const mapStateToProps = (state) => {
  return {
    value: state.demo2.str
  }
}
//它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeName: () => dispatch(demo2Date('abc'))
  }
}

//连接组件
//它是一个高阶组件 所谓高阶组件就是你给它传入一个组件，它会给你返回新的加工后的组件
export default connect(mapStateToProps,mapDispatchToProps)(Demo2)