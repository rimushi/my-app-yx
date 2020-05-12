import React, { Component } from 'react'
import { Table } from 'antd';
import './index.css'

class Page1 extends Component {  
  constructor() {
       super();      
       this.state = {         
           current: 1,
           pageSize: 2,   //已经加载过的页
           totals: 5,
           dataSource: []
       };       
  }

  state = {
    selectedRowKeys: []
  };
  //组件挂载后
  componentDidMount() {   
    this.setState ({
      dataSource:  [
          {
            key: '1',
            name: '张1',
            age: 32,
            address: '西湖区湖底公园1号',
          },
          {
            key: '2',
            name: '李2',
            age: 42,
            address: '西湖区湖底公园1号',
          },
          {
            key: '3',
            name: '张3',
            age: 32,
            address: '西湖区湖底公园1号',
          },
          {
            key: '4',
            name: '李4',
            age: 42,
            address: '西湖区湖底公园1号',
          },
          {
            key: '5',
            name: '张5',
            age: 32,
            address: '西湖区湖底公园1号',
          }
        ]       
    });
    //默认选中哪些项目
    this.setState ({
      selectedRowKeys: ["1","3"],
    })
  }
  changePage = (page) => {   
    this.setState({
        currentPage: page,
    });   
  }
  //selectedRowKeys 指定选中项的 key 数组，需要和 onChange 进行配合
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }; 
  //渲染组件函数
  render() {  
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      //来控制选中项
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
    ];

    // 表格分页属性
    const paginationProps = {     
      showQuickJumper: false,
      showTotal: () => `共${this.state.totals}条`,
      // pageSize: this.state.pageSize,
      // current: page.pageNum,
      // totals: page.totals,
      pageSize: this.state.pageSize,
      current: this.state.currentPage,
      totals: this.state.totals,      
      onChange: this.changePage,
    }

    return (
      <div>
          <Table rowSelection={rowSelection} dataSource={this.state.dataSource} columns={columns} size="middle" pagination={ paginationProps }/>
      </div>
    )
  }  
}
export default Page1
