import React, { Component } from 'react';
import './index.css'
//引入ecahrts
import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';

//这里你要画什么的时候，就引入什么，
//具体参考引入路径地址：https://www.npmjs.com/package/echarts-for-react


//父组件，传给子组件一个on的prop
class EchartsColumn extends Component {
  componentDidMount() {
        // 初始化
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '某地区蒸发量和降水量' },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['蒸发量','降水量']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {
                      show: true,
                      type: 'jpg'
                    }
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : this.props.data.xdata
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'蒸发量',
                    type:'bar',
                    data: this.props.data.ydata.ydata1,
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'降水量',
                    type:'bar',
                    data: this.props.data.ydata.ydata2,
                    markPoint : {
                        data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                },
            ]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: '100%', height: 500 }}></div>
        );
    }
}

export default EchartsColumn;




