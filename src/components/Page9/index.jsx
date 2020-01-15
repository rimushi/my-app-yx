import React, { Component } from 'react'
import { Tabs, Carousel, Spin, Icon, Skeleton } from 'antd';
import './index.css'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Page9 extends Component {  
  render() {
    return (
      <div>
        <Skeleton active avatar paragraph={{ rows: 4 }} />

        {/*标签页*/}
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>

        {/*走马灯*/}
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>

        {/*加载中 spin标签在外层 半透明显示*/}
        <Spin tip="加载中..." indicator={antIcon}>
          <div className="example" >文字省略</div>
        </Spin>

        {/*加载中 spin标签在内层 没有半透明效果*/}
        <div className="example" >
          <div>文字省略</div>
          <Spin tip="加载中..." indicator={antIcon}/>
        </div>
      </div>
    )
  }
}

export default Page9

