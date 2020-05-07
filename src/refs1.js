// 16.3版本之前   ref 表示节点
// import React from "react";
// class Goodbye extends React.Component {
//     constructor() {
//         super();
//         this.test = this.test.bind(this);

//     }
//     test(){
//         console.log(this.refs.myInput.value);
//         this.refs.myInput.value = "小明"
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.test}>点击</button>
//                 <input type="text" ref="myInput"/>
//             </div>
//         )
//     }
// }
// export default Goodbye ;


// 16.3版本之前   ref 回调函数
// import React from 'react';
// class Goodbye extends React.Component {
//     constructor(props) {
//         super();
//         this.test = this.test.bind(this)
//     }
//     test() {
//         this.refs.myInput.value = "admin"
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.test}>提交</button>
//                 <input type="text" ref="myInput" />
//                 <input ref={function (input) { if (input != null) { input.focus() } }} />
//             </div>
//         )
//     }
// }
// export default Goodbye ;


// 16.3版本之后   标记节点
// import React from "react";
// class Goodbye extends React.Component {
//     constructor() {
//         super();
//         this.test = this.test.bind(this);
//         this.myRef = React.createRef();     //创建

//     }
//     test(){
//         console.log(this.myRef.current)
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.test}>点击</button>
//                 <input type="text" ref={this.myRef}/>
//             </div>
//         )
//     }
// }
// export default Goodbye ;


// 16.3版本之后    获取子组件以及操作子组件
// import React from "react";
// import Son from "./refs2";
// class Goodbye extends React.Component {
//     constructor() {
//         super();
//         this.test = this.test.bind(this);
//         this.myRef = React.createRef();     //创建

//     }
//     test(){
//         console.log(this.myRef.current)
//         console.log(this.myRef.current.state.name)
//         this.myRef.current.setState({"name":"小明"})
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.test}>点击</button>
//                 <Son ref={this.myRef}/>
//             </div>
//         )
//     }
// }
// export default Goodbye ;




// 16.3版本之后    获取子节点
// import React from "react";
// import Son1 from "./refs2";
// class Goodbye extends React.Component {
//     constructor() {
//         super();
//         this.test = this.test.bind(this);
//         this.myRef = React.createRef();     //创建

//     }
//     test(){
//          console.log(this.myRef.current.innerHTML)
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.test}>点击</button>
//                 <Son1 ref={this.myRef}/>
//             </div>
//         )
//     }
// }
// export default Goodbye ;




import React from 'react';
import './nav1.css';
class Goodbye extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sty: "con"
        }
        this.test = this.test.bind(this)
    }
    test() {
        this.state.sty == "con" ? this.setState({ sty:"two" }) : this.setState({ sty:"con" })
    }
    render() {
        return (
            <div className={this.state.sty} onMouseEnter={this.test}>黎明的那道光,会越过黑暗</div>
        )
    }
}
export default Goodbye ;





