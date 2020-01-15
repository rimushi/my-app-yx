import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import { message, Button, Progress, Result, Timeline, Icon, Breadcrumb } from 'antd';
import './index.css'


class Detail extends Component { 
  backPage = () => {    
    this.props.history.push('/page');
  }
  success = () => {
    message.success('成功提示');
  }
  error = () => {
    message.error('失败提示');
  }
  warning = () => {
    message.warning('警告信息');
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
         <div className="detail">
           <Breadcrumb>
              <Breadcrumb.Item>导航一</Breadcrumb.Item>
              <Breadcrumb.Item>                
                <Link to="/homepage">首页</Link>
              </Breadcrumb.Item>             
              <Breadcrumb.Item>详情</Breadcrumb.Item>
           </Breadcrumb>
         </div>         
         <Result
          status="success"
          title="已经付款成功了!"
          subTitle="详细信息....."
          extra={[
            <Button type="primary" key="console" onClick={this.backPage}>
              返回
            </Button>,
            // <Button key="buy">再次购买</Button>,
          ]}
        />
         <div className="detail">
           <Button onClick={this.success}>成功</Button>
           <Button onClick={this.error}>失败</Button>
           <Button onClick={this.warning}>警告</Button>
         </div>
         <div style={{ width: 170 }} className="detail">
            <Progress percent={30} size="small" />
            <Progress percent={50} size="small" status="active" />
            <Progress percent={70} size="small" status="exception" />
            <Progress percent={100} size="small" />
        </div>
        <div>
          <Progress type="circle" percent={30} width={80} />
          <Progress type="circle" percent={70} width={80} status="exception" />
          <Progress type="circle" percent={100} width={80} />
        </div>        
        {/*status  状态，可选：success exception normal active(仅限 line) */}
        <div className="detail">
          <Timeline>
            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>           
            <Timeline.Item color="red">
              <p>Solve initial network problems 1</p>
              <p>Solve initial network problems 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
              <p>Technical testing 1</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item>
              <p>Technical testing 1</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="gray">
              <p>Technical testing 1</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);
