import React, { Component } from 'react'
import './index.css'

class Page16 extends Component{ 
  render() {
    return (
      <div className="flexLayout">
        {/*!-- 使用flex左右布局 */}
        <div className="main">
            <div className="left">左侧区域</div>
            <div className="right">右侧区域</div>
        </div>

        {/*!-- 使用flex多行平均布局*/}
        <div className="wrap">
            <div className="content">
               <div className="item">1</div>
            </div>
            <div className="content">
                <div className="item">2</div>
            </div>
            <div className="content">
                <div className="item">3</div>
            </div>
            <div className="content">
                <div className="item">4</div>
            </div>
            <div className="content">
                <div className="item">5</div>
            </div>
            <div className="content">
                <div className="item">6</div>
            </div>
            <div className="content">
                <div className="item">7</div>
            </div>
            <div className="content">
                <div className="item">8</div>
            </div>
        </div>
        
        {/*!-- 使用flex多行平均布局*/}
        <div className="wrap2">
            <div className="content2"></div>
            <div className="content2"></div>
        </div>
      </div>
    )
  }
}


export default Page16;

