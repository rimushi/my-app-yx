import React, { Component } from 'react'
//高阶组件中的withRouter, 作用是将一个组件包裹进Route里面, 
// 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中.
import {withRouter} from 'react-router-dom'

import './index.css'

// @withRouter
class Login extends Component { 
  state = {
    title: ''
  } 
  onChangeName = () => {  
    this.props.history.push('/main');
  }  
  componentDidMount() {   
     this.setState ({
        title : "登录"       
     });
  }
  render() {   
    const { title } = this.state
    return (
      <div className="login">          
          <div onClick={this.onChangeName} className="loginTxt">{title}</div>
      </div>
    )
  }
}

export default withRouter(Login)