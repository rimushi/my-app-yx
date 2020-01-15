import React, { Component } from 'react'
import './index.css'
import { withRouter } from 'react-router-dom'
import { Popover, Icon  } from 'antd';

class Header extends Component {

  onExit = () => {  
    this.props.history.push('/login');
  }

  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {   
    return (
        <div className="headerWrapper"> 
            <div className="title">React 开发管理平台</div>
            <div className="more"> 
	            <Popover
			        content={
			        	<div>
				        	<div onClick={this.hide} className="pop-menu">修改密码</div>
				        	<div onClick={this.onExit} className="pop-menu">退出</div>
			        	</div>
			        }
			        title=""
			        trigger="click"
			        visible={this.state.visible}
			        onVisibleChange={this.handleVisibleChange}
			      >
			        <span className="exit-txt">
					    你好，admin <Icon type="down"/>
					</span>
			    </Popover>   
		    </div>  
        </div>         
    )
  }
}
export default withRouter(Header)