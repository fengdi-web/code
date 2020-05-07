import React from 'react'

import { Button, Spin, Alert } from 'antd'

import fetchJSONP from 'fetch-jsonp'

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {}, // 电影信息对象
            isloading: true
        }
    }

    UNSAFE_componentWillMount() {
        console.log(this.props)
        fetchJSONP('https://api.douban.com/v2/movie/subject/' + this.props.match.params.id + '?apikey=0df993c66c0c636e29ecbb5344252a4a')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    info: data,
                    isloading: false
                })
            })
    }

    render() {
        return <div>
            <Button type="primary" onClick={this.goBack}>
                返回电影列表页面
      </Button>

            {this.renderInfo()}
        </div>
    }

    // 实现返回按钮的功能
    goBack = () => {
        this.props.history.go(-1)
    }

    renderInfo = () => {
        if (this.state.isloading) {
            return <Spin tip="Loading...">
                <Alert
                    message="正在请求数据"
                    description="精彩内容，马上呈现....."
                    type="info"
                />
            </Spin>
        } else {
            return <div>
                <div style={{ textAlign: 'center' }}>
                    <h1>{this.state.info.title}</h1>

                    <img src={this.state.info.images.large.replace('img3', 'img1')} alt="" />
                </div>

                <p style={{ textIndent: '2em', lineHeight: '30px' }}>{this.state.info.summary}</p>
            </div>
        }
    }
}