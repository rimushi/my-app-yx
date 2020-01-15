import React, { Component } from 'react'
import './index.less'

class Page18 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.oneMethod()
    }    

    render() {
        return (
            <div>
               <div class="widget"></div>
            </div>
        )
    }
}

export default Page18;