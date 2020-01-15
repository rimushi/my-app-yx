import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'
import './index.css'
const { SubMenu }  = Menu

class Nav extends Component {
  
  state = {
          //   navArr: [{                         
          //             "name": "首页",
          //             "key": "1",
          //             "url": "/page",  
          //              "iconType": "appstore",
          //           }, {                      
          //             "name": "系统管理",
          //             "key": "2",
          //             "url": " ",       
          //             "iconType": "appstore",
          //             "child": [{                
          //               "name": "详情",
          //               "key": "3";
          //               "url": "/main/detail",  
          //             }]
          //           }]
  }

  render() {   
    return (
          <div className="nav"> 
                {/* ================循环map实例 start===============*/}
                {/*<div>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                      return (
                        <div className="food-item" key={index}>
                          <div className="food-item-inner" >{item}</div>
                        </div>
                      );
                    })}
                </div>*/}
                {/* ==================循环map实例 end=================*/}

                {/* ==================嵌套循环菜单实例 start==============*/}
                {/* {this.state.navArr.map((navItem, navIndex) => {
                  return (
                      <div key={navIndex}>
                          {navItem.second.length === 0 &&
                            <Link to={navItem.url}>
                                <div>                             
                                   {navItem.name}
                                </div>
                            </Link>
                          }

                          {navItem.second.length > 0 &&                      
                            <div>                             
                               {navItem.name}
                            </div>
                          }

                          {navItem.second.map((item, index) => {
                            return (
                              <NavLink to={item.url} key={index} activeStyle={{ fontWeight: 'bold', color: 'red' }} style={{display:"block", marginLeft:"20px"}}>
                                <div>                             
                                 {item.name}
                                </div>
                              </NavLink>
                            );
                          })}

                      </div>
                  );
                })} /}
                {/* ==================嵌套循环菜单实例 end==================*/}
       
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['2']}
            defaultOpenKeys={['1','4']}
            mode="inline"
          >  
            <SubMenu
              key="1"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>导航一</span>
                </span>
              }
            >
              <Menu.Item key="0">
                  <NavLink to="/page"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                    首页
                  </NavLink>                  
              </Menu.Item>  
              <Menu.Item key="12">
                  <NavLink to="/page12"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                     引入echart图表
                  </NavLink>
              </Menu.Item> 
              <Menu.Item key="13">
                  <NavLink to="/page13"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", fontSize:"12px", marginLeft:"20px"}}>
                     父子组件间传值
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="15">
                  <NavLink to="/page15"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", fontSize:"12px", marginLeft:"20px"}}>
                     两个表单的引用
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="16">
                  <NavLink to="/page16"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", fontSize:"12px", marginLeft:"20px"}}>
                     flex的使用
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="17">
                  <NavLink to="/page17"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", fontSize:"12px", marginLeft:"20px"}}>
                     引入D3
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="18">
                  <NavLink to="/page18"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", fontSize:"12px", marginLeft:"20px"}}>
                      less的使用
                  </NavLink>
              </Menu.Item>                    
            </SubMenu>
            <SubMenu
              key="4"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>导航二</span>
                </span>
              }
            >
              <Menu.Item key="1">
                  <NavLink to="/page1"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                     表格
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                  <NavLink to="/page2"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                     表单
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                  <NavLink to="/page3"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                     树形
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                  <NavLink to="/page4"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                     日期
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="5">
                  <NavLink to="/page5"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                     步骤条和自动补全
                  </NavLink>
              </Menu.Item> 
              <Menu.Item key="6">
                  <NavLink to="/page6"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                     多选框全部选中
                  </NavLink>
              </Menu.Item> 
              <Menu.Item key="7">
                  <NavLink to="/page7"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                     多选框分组显示
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="8">
                  <NavLink to="/page8"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                     折叠面板
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="9">
                  <NavLink to="/page9"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                     Tab标签和走马灯
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="10">
                  <NavLink to="/page10"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                     生命周期(现在react16使用)
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="14">
                  <NavLink to="/page14"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", marginLeft:"20px"}}>
                     生命周期(未来react17使用)
                  </NavLink>
              </Menu.Item>
              <Menu.Item key="11">
                  <NavLink to="/page11"  activeStyle={{ fontWeight: 'bold' }} style={{float:"left", fontSize:"12px", marginLeft:"20px"}}>
                     shouldComponentUpdate进行优化
                  </NavLink>
              </Menu.Item>                          
            </SubMenu>
          </Menu>
        </div> 
    )
  }
}
export default Nav