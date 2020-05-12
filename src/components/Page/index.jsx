import React, { Component } from 'react'
import { Table, Tag, Divider, Modal, Button, Form, Input } from 'antd'
import { Link } from "react-router-dom";
import './index.css'

// Modal.method()包括：Modal.info Modal.success Modal.error Modal.warning Modal.confirm
const { confirm } = Modal;
const { TextArea } = Input;

//使用常量给表单定义样式
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

// 封装组件
class Page extends Component {  
  // constructor() {
  //      super();      
  //      this.state = {         
  //          current: 1,
  //          pageSize: 2,   //已经加载过的页
  //          totals: 5,
  //          dataSource: []
  //      };       
  // }
  state = {         
    current: 1,      //当前页
    pageSize: 2,     //已经加载过的页
    totals: 5,       //总条数
    dataSource: [],   //表格数据源
    visible: false,  //弹窗是否显示
    title: ''        //弹窗标题
  }
  //弹窗展示
  showModal = (record) => {
    this.setState({
      visible: true,
    });
    console.log(record);   
    if (record === undefined) {
      //新增     
      this.setState({title: "新增"});
      this.props.form.resetFields();
    } else {
      //编辑    
      this.setState({title: "编辑"});
      //setFieldsValue是antd form的一个api，其作用是对指定的已使用from包裹的表单进行value设置。
      this.props.form.setFieldsValue({name: record.name, age: record.age, address: record.address});
    }    
  }
  //弹窗点击确定
  handleOk = e => {
    console.log(e);   
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 弹窗关闭
        this.setState({visible: false,});   
        // 获取当前的表格数据
        let currentData =  this.props.form.getFieldsValue();
        console.log(currentData);
      }
    });
  }
  //弹窗点击取消
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  //点击分页
  changePage = (page) => {   
    this.setState({
        pageNum: page,
    });   
  } 
  //是否删除
  showDeleteConfirm = (id) => {
    confirm({
      title: '确定删除这条信息吗?',
      content: '删除后将无法恢复',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  //自定义年龄校验
  ageValidator = (rule, value, callback) => {    
    var pattern = /^[0-9]*$/;
    if (!pattern.test(value)) {
      callback(new Error('请输入数字格式'));
    } else {
      callback();
    }
  };
  //组件渲染后调用
  componentDidMount() {   
    this.setState ({
      dataSource:  [
          {
            key: '1',
            name: '张1',
            age: 32,
            address: '西湖区湖底公园1号',
            tags: ['a', 'b', 'c'],
          },
          {
            key: '2',
            name: '李2',
            age: 42,
            address: '西湖区湖底公园1号',
            tags: ['a','c'],
          },
          {
            key: '3',
            name: '张3',
            age: 32,
            address: '西湖区湖底公园1号',
            tags: ['a', 'b', ],
          },
          {
            key: '4',
            name: '李4',
            age: 42,
            address: '西湖区湖底公园1号',
            tags: ['a', 'c'],
          },
          {
            key: '5',
            name: '张5',
            age: 32,
            address: '西湖区湖底公园1号',
            tags: ['a'],
          }
        ]       
    });
  }  
  render() {      
    //常量定义表格列表头
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
        {
          title: '标签',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <span>
              {tags.map(tag => {                           
                return (
                  <Tag color="blue" key={tag}>
                    {/*注释：标签里面的脚本是需要大括号的*/}
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          )
        },
        {
          title: '操作',
          key: 'action',
          // text当前行的值，record当前行数据，
          render: (text, record) => (
            <span>         
              {/*注释 传参 这里之所以不直接用this.showModal(record)，是因为用了会立马执行，目前的话就是封装成函数等待点击事件触发*/}     
              <span onClick={()=>this.showModal(record)} className="operate-txt" >编辑</span> 
              {/*注释 传参 这里用bind,是因为bind会延迟执行，这个语句等同上一句}
              {/*<span onClick={this.showModal.bind(this,record)} className="operate-txt" >编辑</span>*/}
              <Divider type="vertical" />     
              {/*这里跳到新的路由上*/}        
              <Link to={`/page/${record.key}`}>详情</Link>
              <Divider type="vertical" />
              <span onClick={()=>this.showDeleteConfirm(record.key)} className="operate-txt" >删除</span>
            </span>
          )
        }
    ];

    //表格分页属性
    const paginationProps = {     
      showQuickJumper: false,
      showTotal: () => `共${this.state.totals}条`,
      pageSize: this.state.pageSize,
      current: this.state.pageNum,
      totals: this.state.totals,      
      onChange: this.changePage,
    }


    //Antd中 经过 Form.create 包装的组件将会自带 this.props.form 属性
    //经过getFieldDecorator 注册就可以使用使用 getFieldsValue getFieldValue setFieldsValue 等
    //相当于从普通的form接管过来
    const { getFieldDecorator } = this.props.form

    return (
      <div>
          <Button onClick={()=>this.showModal()} type="primary" className="new-btn" >新增</Button>
          <Table dataSource={this.state.dataSource} columns={columns} size="middle" pagination={ paginationProps }/>
          <Modal
            title={this.state.title}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            okText="确认"
            cancelText="取消"
          >
                <Form.Item {...formItemLayout} label="姓名">
                  {getFieldDecorator('name', {
                    rules: [
                      { required: true,message: '请输入你的姓名' },
                      { max: 10, message: '最多10个字符', trigger: 'change' },      
                      { pattern: /^[0-9a-zA-Z]*$/, message: '请输入字母和数字格式', trigger: 'change' }, 
                    ],
                  })(<Input placeholder="请输入姓名" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="年龄">
                  {getFieldDecorator('age', {
                    rules: [   
                      //自定义校验
                      { validator: this.ageValidator, trigger: 'change' }
                    ],
                  })(<Input placeholder="请输入年龄" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="地址">
                  {getFieldDecorator('address', {
                    rules: [
                      { required: true,message: '请输入你的地址' }
                    ],
                  })(<TextArea rows={4} placeholder="请输入地址" />)}
                </Form.Item>
          </Modal>          
      </div>
    )
  }  
}

// 经过 Form.create 包装的组件将会自带 this.props.form 属性，this.props.form 提供的 API 如下：
// 注意：使用 getFieldsValue getFieldValue setFieldsValue 等时，应确保对应的 field 已经用 
// getFieldDecorator 注册过了。
export default Form.create()(Page)
