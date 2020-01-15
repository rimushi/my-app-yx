import React, { Component } from 'react'
/*
  前提执行：npm run eject 暴露出配置文件
  修改 webpack.config.js 文件 
  一是test: /\.css$/  改为   test: /\.css|less$/,
  二是{loader: require.resolve('less-loader')}
*/
import './index.less'

class Page18 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }    

    render() {
        return (
            <div>
               <div class="widget"></div>
            </div>
        )
    }
}

export default Page18;