import React, { Component } from 'react'
import './index.css'

class Child extends Component { 
    constructor (props) {
      super(props);     
      this.state = {}; 
    }
    handleClick() {
      this.props.colorChange('yellow')
    } 
    render() {
      return (
        <div>
            <h1>父组件的值  {this.props.bgColor}</h1>
            <button onClick={(e)=>this.handleClick(e)}>改变父组件颜色</button> 
        </div>
      )
    }  
}

export default Child

