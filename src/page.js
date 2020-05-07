import React, { Component } from 'react'
import Pagination from './page_son'

export default class page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 20,     //数据总数
            pageSize: 3,  //一页显示几条数据
            currentPageNum: 1
        }
    }
    render() {
        const { total, pageSize, currentPageNum } = this.state
        return (
            <div>
                <h1>父组件</h1>
                <Pagination
                    total={total}
                    pageSize={pageSize}
                    currentPageNum={currentPageNum}
                    goToPage={(pageNum) => this.goToPage(pageNum)}
                />
            </div>
        )
    }
    //翻页功能
    goToPage(pageNum) {
        // this.requestNewsData(pageNum); //网络请求的方法
        console.log("请求第" + pageNum + "页")
    }
}
