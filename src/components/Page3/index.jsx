import React, { Component } from 'react'
import { Tree} from 'antd';

import './index.css'
//给表单定义样式

const { TreeNode } = Tree;

class Page3 extends Component {

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  render() {
    return (
      <div>
          <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            //defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1-0']}
            // onSelect={this.onSelect}
            onCheck={this.onCheck}
          >
              <TreeNode title="parent 1" key="0-0">
                  <TreeNode title="parent 1-0" key="0-0-0">
                    <TreeNode title="leaf" key="0-0-0-0"/>
                    <TreeNode title="leaf" key="0-0-0-1" />
                  </TreeNode>
                  <TreeNode title="parent 1-1" key="0-0-1">
                    <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                    <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-1" />
                  </TreeNode>
              </TreeNode>
          </Tree>
      </div>
    );
  }

}

export default Page3

// defaultSelectedKeys 默认选中的树节点，指的是文字部分不常用
// defaultCheckedKeys  默认选中复选框的树节点

