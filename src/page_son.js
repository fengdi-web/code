import React, { Component } from 'react'

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageNum: props.currentPageNum, //当前页码
        }
    }
    render() {
        let pageTotal = Math.ceil(this.props.total / this.props.pageSize); //页码总数
        return (
            <section>
                <a href="javascript:void(0)" onClick={() => this.goToPage(this.state.currentPageNum-1)}>上一页  </a>
                <div>
                    <input type="text" value={this.state.currentPageNum} />
                    <span>/{pageTotal}</span>
                </div>
                <a href="javascript:void(0)" onClick={() => this.goToPage(this.state.currentPageNum+1)}>下一页  </a>
            </section>
        )
    }
    goToPage(num) {
        this.setState({currentPageNum: num});
        this.props.goToPage(num); 
    }
}