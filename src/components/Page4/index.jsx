import React, { Component } from 'react'
import { DatePicker, TimePicker } from 'antd';
//monet不需要再单独安装，应该是在安装antd的时候依赖安装了
import moment from 'moment';
// //// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale
// import 'moment/locale/zh-cn';
import './index.css'
//给表单定义样式

//单日期控件中英文也可通过下面切换
// moment.locale('zh-cn')
// moment.locale('en')

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

function onChange(date, dateString) {
  console.log(date, dateString);
}

class Page4 extends Component {
  state = {
    value: moment('12:08:23', 'HH:mm:ss'),
  };

  onChange = time => {
    console.log(time);
    this.setState({ value: time });
  };

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  render() {
    return (
      <div>  
          <div>
              <DatePicker onChange={onChange}/>
          </div>
          <div>
              <MonthPicker onChange={onChange} placeholder="选择月" />
          </div>
          <div>
              <RangePicker onChange={onChange} />
          </div>  


          <div>
              {/* defaultValue默认日期  format设置日期格式 不设置的话就按默认格式YYYY-MM-DD显示 
               下面的两处设置了日期格式，后者可以覆盖前者*/}
              <DatePicker defaultValue={moment('2019/01/01', 'YYYY-MM-DD')} format='YYYY/MM/DD' />
                <br/>           
              <MonthPicker defaultValue={moment('2019/01', monthFormat)} format={monthFormat} />
                <br/>
              <RangePicker
                defaultValue={[moment('2019/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                format={dateFormat}
              />
          </div>  
          
          <div>
              <TimePicker value={this.state.value} onChange={this.onChange} />
          </div>
      </div>
    );
  }

}

export default Page4

