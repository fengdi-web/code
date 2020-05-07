import React from "react";
import "./reset.css";
import "./spjj.css";

class Spjj extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <ul className="lis">
                            <li>
                                <span className="pos">朝阳区</span>
                            </li>
                            <li>欢迎光临斯品家居</li>
                        </ul>
                    </li>
                    <li>
                        <ul className="lis">
                            <li><a href="#">登录</a></li>
                            <li><a href="#">注册</a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="lis">
                            <li><a href="#">个人中心</a></li>
                            <li><a href="#">我的订单</a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#">斯品首页</a></li>
                            <li><a href="#">服务保证</a></li>
                            <li><a href="#">关注微信获取优惠</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Spjj;