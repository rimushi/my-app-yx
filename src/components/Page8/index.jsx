import React, { Component } from 'react'
// import { Checkbox, Row, Col, Radio } from 'antd';
import { Collapse, Icon } from 'antd';
import './index.css'

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const genExtra = () => (
  <Icon
    type="setting"
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

class Page8 extends Component {  
  render() {
    return (
      <div> 
        <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="This is panel header 1" key="1" extra={genExtra()}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra={genExtra()}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" disabled extra={genExtra()}>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    )
  }
}

export default Page8

