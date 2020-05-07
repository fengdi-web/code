// map
// import React from "react";
// class Sj extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "content":["标题1","标题2","标题3","标题4"]
//         }
//     }
//     render() {
//         return (
//             <ul>
//                {this.state.content.map((value)=><li key={value}>{value}</li>)}
//             </ul>
//         )
//     }
// }
// export default Sj ;


// key   
// import React from "react";
// class Sj extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             "content": [{ "id": 0, "title": "新闻1", "con": "asdhhfshkhioh" },
//             { "id": 1, "title": "新闻2", "con": "asdhhfshkhioh" },
//             { "id": 2, "title": "新闻3", "con": "asdhhfshkhioh" }]
//         }
//     }
//     render() {
//         let list = this.state.content.map((value) => <div key={value.id}><h3>{value.title}<p>{value.con}</p></h3></div>)
//         return (
//             <div>
//                 {list}
//             </div>
//         )
//     }
// }
// export default Sj;



// if结构
// import React from "react";
// class Sj extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             "flat": true
//         }
//         this.changeFlat = this.changeFlat.bind(this)
//     }
//     changeFlat() {
//         this.setState({
//             "flat": !this.state.flat
//         })
//     }
//     render() {
//         if (this.state.flat) {
//             return (
//                 <div>
//                     <div><h3>登录前</h3></div>
//                     <button onClick={this.changeFlat}>登录</button>
//                 </div>
//             )
//         } else {
//             return (
//                 <div>
//                     <div><h3>登录后</h3></div>
//                     <button onClick={this.changeFlat}>退出</button>
//                 </div>
//             )
//         }
//     }
// }
// export default Sj;



// 与运算符&&
// import React from "react";
// class Sj extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             "flat":true
//         }
//         this.changeFlat = this.changeFlat.bind(this)
//     }
//     changeFlat() {
//         this.setState({
//             "flat": !this.state.flat
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.changeFlat}>按钮</button>
//                 <h3>hello world</h3>
//                 {this.state.flat && <div>你好</div>}
//             </div>
//         )
//     }
// }
// export default Sj;

// import React from "react";
// class Sj extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             "flat": true
//         }
//     }
//     componentDidMount() {
//         window.onscroll = () => {
//             let ss = document.documentElement.scrollTop || document.body.scrollTop;
//             console.log(ss);
//             if (ss > 0) {
//                 this.setState({
//                     "flat": false
//                 })
//             } if (ss == 0) {
//                 this.setState({
//                     "flat": true
//                 })
//             }
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {/* <button onClick={this.changeFlat}>按钮</button> */}
//                 <h3>hello world</h3>
//                 {this.state.flat && <div>你好</div>}
//             </div>
//         )
//     }
// }
// export default Sj;


// 三目运算符
// import React from "react";
// import Loginin from "./lg1"
// import Loginout from "./lg2"
// class Sj extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             "flat": true
//         }
//     }
//     changeFlat(f){
//         this.setState({
//             "flat":f
//         })
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.flat? <Loginin cf={(f)=>{this.changeFlat(f)}}/>:<Loginout cf={(f)=>{this.changeFlat(f)}}/>}
//             </div>
//         )
//     }
// }
// export default Sj;



// 二级导航
// import React from "react";
// import Son from "./lgnav";
// var ys = { "float": "left", "width": 200, "background": "#0f0", "listStyle": "none", "textAlign": "center" }
// class Sj extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "content": [
//                 { id: 0, first: "产品1列表", fc: ["产品1", "产品2", "产品3"] },
//                 { id: 1, first: "产品2列表", fc: ["产品11", "产品12", "产品13"] },
//                 { id: 2, first: "产品3列表", fc: ["产品12", "产品22", "产品23"] }
//             ]
//         }
//         this.test = this.test.bind(this);
//     }
//     test(){
//         // this.refs.myInput.innerHTML= ""
//     }
//     render() {
//         return (
//             <ul>
//                 {this.state.content.map((value) => <li key={value.id} style={ys} onMouseOver={this.test} ref="myInput">{value.first}<Son cc={value.fc.map((value, index) => <li>{value}</li>)} /></li>)}
//             </ul>
//         )

//     }
// }
// export default Sj;







// 设置默认属性
// import React from "react";
// class Sj extends React.Component {
//     // 设置默认属性
//     // static -- 代表静态的
//     // es7
//     // static defaultProps={
//     //     "name":"小明"
//     // }
//     constructor(props) {
//         super(props);
//         // this.state = {
//         // }
//     }
//     render() {
//         return (
//             <div>
//             </div>
//         )
//     }
// }
// // 设置默认属性
// // es6
// // Sj.defaultProps={
// //     "name":"小明"
// // }
// // 通过this.props.name  可以读取到
// export default Sj ;




// 实例化期
// import React from "react";
// class Sj extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "test":true
//         }
//     }
//     componentWillMount(){
//         this.setState({
//             "test":"你好"
//         })
//     }
//     componentDidMount(){
//         this.setState({
//             "test":"hello"
//         })
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.test}
//             </div>
//         )
//     }
// }
// // es6
// Sj.defaultProps={
//     "name":"小明"
// }
// export default Sj ;




// 存在期
// import React from "react";
// import Loginin from "./lg1";
// class Sj extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "test": true
//         }
//     }
//     componentWillMount() {
//         this.setState({
//             "test": "你好"
//         })
//     }
//     componentDidMount() {
//         this.setState({
//             "test": "hello"
//         })
//     }
//     componentDidUpdate(){
//        //可以操作真实DOM 
//     }
//     componentWillUnmount(){
//         //清楚计时器等等
//     }
//     render() {
//         return (
//             <div>{this.state.test}
//             <Loginin name={this.state.test} />
//             </div>
//         )
//     }
// }
// Sj.defaultProps = {
//     "name": "小明"
// }
// export default Sj;





// 新的生命周期
// import React from "react";
// import Loginin from "./lg1";
// class Sj extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "test": "123"
//         }
//         this.changeState = this.changeState.bind(this)
//     }
//     static getDerivedStateFromProps(props,state){
//         console.log(props.name,state.test,1)
//         return {
//             "test":props.name+state.test
//         }
//     }
//     changeState(){
//         this.setState({
//             "test":"lily"
//         })
//     }
//     render() {
//         return (
//             <div>{this.state.test}
//             <Loginin name={this.state.test} />
//             <button onClick={this.changeState}>登录</button>
//             </div>

//         )
//     }
// }
// Sj.defaultProps = {
//     "name": "小明"
// }
// export default Sj;



// ajax
// import React from "react";
// class Sj extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "newTitle":""
//         }
//     }
//     componentDidMount(){
//         let xmlHttp = new XMLHttpRequest();
//         xmlHttp.open("post", "http://www.qhdlink-student.top/student/newsa.php");
//         xmlHttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//         xmlHttp.onreadystatechange = function(){
//             if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
//                 // console.log(typeof xmlHttp.responseText)
//                 let data = JSON.parse(xmlHttp.responseText);
//                 console.log(data)
//                 this.setState({
//                     "newTitle":data
//                 })
//             }
//         }.bind(this)
//         xmlHttp.send("username=冯迪&userpwd=123456&userclass=56&type=4");
//     }
//     render() {
//         let arr = [];
//         for(let i in this.state.newTitle){
//             arr.push(<li key={this.state.newTitle[i].id_news}>{this.state.newTitle[i].title_news}</li>)
//         }
//         return (
//             <div>
//                  <ul>
//                     {arr}
//                  </ul>
//             </div>
//         )
//     }
// }
// export default Sj;




// fetch
// import React from "react";
// class Sj extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "newTitle": ""
//         }
//     }
//     componentDidMount() {
//         fetch("http://www.qhdlink-student.top/student/newsa.php", {
//             method: "post",
//             headers: new Headers({
//                 "content-type":"application/x-www-form-urlencoded"
//             }),
//             body: "username=冯迪&userpwd=123456&userclass=56&type=4"
//         }).then(function (response) {
//             console.log(response)
//             return response.json();
//         }).then(function (data) {
//             console.log(data);
//             this.setState({
//                 "newTitle": data
//             })
//         }.bind(this))
//     }
//     render() {
//         let arr = [];
//         for (let i in this.state.newTitle) {
//             arr.push(<li key={this.state.newTitle[i].id_news}>{this.state.newTitle[i].title_news}</li>)
//         }
//         return (
//             <div>
//                 <ul>
//                     {arr}
//                 </ul>
//             </div>
//         )
//     }
// }
// export default Sj;




import React from 'react'
class Sj extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: []
        }
    }
    componentDidMount() {
        fetch("http://www.qhdlink-student.top/student/newsa.php", {
            method: 'post',
            body: 'username=冯迪&userpwd=123456&userclass=56&type=4',
            headers: { "Content-Type": 'application/x-www-form-urlencoded' },
        }).then((res) => res.json()).then((data) => {
            this.setState({ arr: Object.values(data).map((item) => <li key={item.id_news}>{item.title_news}</li>) })
        })
    }
    render() {
        return (
            <div>
                <ul>{this.state.arr}</ul>
             </div>
        )
    }
}
export default Sj;


// router
// import React from 'react';
// import { Link } from 'react-router-dom'
// import { NavLink ,Route} from 'react-router-dom'
// import "./index.css"
// let cc = { "width": 450, "height": 450, "background": "#fcc" }
// let ss = { "float": "left", "listStyle": "none", "width": 150, "height": 30, "background": "#0f0", "textAlign": "center" }
// let tt = { "padding": 0, "margin": 0 }
// class Sj extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     isActive(){
//       console.log("123")  
//     }
//     render() {
//         return (
//             <div style={tt}>
//                 <div style={cc}>
//                     {/* 接收component传过来的组件 */}
//                     {this.props.children}
//                 </div>
//                 <ul style={tt}>
//                     {/* <li style={ss}><Link to="/">首页</Link></li>
//                     <li style={ss}><Link to="/about">产品</Link></li>
//                     <li style={ss}><Link to="/inbox">我们</Link></li> */}
//                     <li style={ss}><NavLink exact activeClassName="active" to="/" isActive={this.isActive}>首页</NavLink></li>
//                     <li style={ss}><NavLink to="/about">产品</NavLink></li>
//                     <li style={ss}><NavLink to="/inbox">我们</NavLink></li>
//                 </ul>
//             </div>
//         )
//     }
// }
// export default Sj;



