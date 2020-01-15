import React, { Component } from 'react'
import HeaderTop  from '.././Header'
import { Layout } from 'antd';
import Nav  from '.././Nav'
import './index.css'

const { Header, Sider, Content } = Layout;

class HomeLayout extends Component {  
  componentDidMount() {   

  }
  render() { 
    //this.props对象的属性与组件的属性是一一对应的，但是有一个例外
    //就是this.props.children属性，它表示组件的所有子节点
    const { children } = this.props;  
    return (
        <div className="home">
            <Header>
              <HeaderTop></HeaderTop>
            </Header>
            <Layout className="main-Layout">
                <div className="main-sidebar"><Sider><Nav></Nav></Sider></div>
                {/*<div className="main-sidebar"><Sider><Nav></Nav></Sider></div>*/}
                <Content>{ children }</Content>
            </Layout>                
        </div>
    )
  }
}


export default HomeLayout