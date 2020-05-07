import React from "react";

class Yz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cc: "*",
            ww: "#"
        }
        this.log = this.log.bind(this)
    }
    log() {
        let ff = this.refs.myInput.value;
        if (ff.length >= 6) {
            this.setState({
                cc: "正确",
                ww: "http://www.taobao.com"
            })
        } else {
            this.setState({
                cc: "错误",
                ww: "#"
            })
        }
    }
    render() {
        return (
            <div>
                <form action= {this.state.ww} method="get">
                    <p>用户名：<input type="text" ref="myInput" /><span>{this.state.cc}</span></p>
                    <p><input type="submit" value="注册" onClick={this.log} /></p>
                </form>
            </div>
        )
    }
}

export default Yz;