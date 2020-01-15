import React, { Component } from 'react'
import { Steps, AutoComplete } from 'antd';
import './index.css'

const { Step } = Steps;

class Page5 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  state = {
    dataSource: [],
  };
  
  onSearch = searchText => {
    this.setState({
      dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
    });
  };

  onChange = value => {
    this.setState({ value });
  };

  render() { 
    const { dataSource, value } = this.state;
    return (
      <div>
          <div>  
              <Steps current={1} size="small">
                <Step title="完成" description="This is a description." />
                <Step title="进度中" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="等待" description="This is a description." />
              </Steps>
          </div>
          <br/>
          <div>
              自动补全
              <br/>
              <AutoComplete
                value={value}
                dataSource={dataSource}
                style={{ width: 200 }}
                onSearch={this.onSearch}
                onChange={this.onChange}
                placeholder="control mode"
              />
          </div>
      </div>
    );
  }

}

export default Page5

