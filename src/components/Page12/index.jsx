import React, { Component } from 'react';
import './index.css'
//引入封装好的自定义组件
import EchartsColumn from '../echartsColumn';
import EchartsPie from '../echartsPie';

//父组件，传给子组件一个on的prop
class Page12 extends Component {
  state = {
    name: 'scarlet',
    son: 2
  } 
  render() {  
    return (
      <div>
        <div>
          <EchartsColumn data={{
            xdata: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            ydata: {
              ydata1:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
              ydata2:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            }
          }}/>
        </div>
        <div>
          <EchartsPie />
        </div>
      </div>
    );
  }
}

export default Page12;
