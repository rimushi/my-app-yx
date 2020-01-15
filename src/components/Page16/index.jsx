import React, { Component } from 'react'
import './index.css'

class Page16 extends Component{ 
  render() {
    return (
      <div>
        {/*!-- 使用flex左右布局 */}
        <div class="main">
            <div class="left">左侧区域</div>
            <div class="right">右侧区域</div>
        </div>

        {/*!-- 使用flex多行平均布局*/}
        <div class="wrap">
            <div class="content">
               <div class="item">1</div>
            </div>
            <div class="content">
                <div class="item">2</div>
            </div>
            <div class="content">
                <div class="item">3</div>
            </div>
            <div class="content">
                <div class="item">4</div>
            </div>
            <div class="content">
                <div class="item">5</div>
            </div>
            <div class="content">
                <div class="item">6</div>
            </div>
            <div class="content">
                <div class="item">7</div>
            </div>
            <div class="content">
                <div class="item">8</div>
            </div>
        </div>
        
        {/*!-- 使用flex多行平均布局*/}
        <div class="wrap2">
            <div class="content2"></div>
            <div class="content2"></div>
        </div>
      </div>
    )
  }
}


export default Page16;

