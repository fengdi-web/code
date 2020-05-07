// 三目运算符
// import React from "react";
// class Loginin extends React.Component{
//     constructor(props){
//         super()
//         this.ff = this.ff.bind(this)
//     }
//     ff(){
//         this.props.cf(false)
//     }
//     render(){
//         return(
//             <div>
//             <div><h3>请登录</h3></div>
//             <button onClick={this.ff}>登录</button>
//             </div>
//         )
//     }
// }

// export default Loginin




// 存在期
// import React from "react";
// class Loginin extends React.Component {
//     constructor(props) {
//         super()
//         this.state = {
//             "cn": props.name
//         }
//     }
//     componentWillReceiveProps(props) {
//         this.setState({
//             "cn":props.name
//         })
//     }
//     // shouldComponentUpdate(newprops,newstate){
//     //     if(newstate.cn === "hello"){
//     //         return false;
//     //     }else{
//     //         return true;
//     //     }
//     // }
//     // shouldComponentUpdate(newprops,newstate){
//     //     if(newprops.name === "hello"){
//     //         return false;
//     //     }else{
//     //         return true;
//     //     }
//     // }
//     render() {
//         return (
//             <div>
//                 <h3>请登录{this.state.cn}</h3>
//             </div>
//         )
//     }
// }

// export default Loginin




// 新的生命周期
import React from "react";
class Loginin extends React.Component {
    constructor(props) {
        super()
        this.state = {
            "cn": props.name
        }
    }
    static getDerivedStateFromProps(props,state){
        
        console.log(props.name)
        console.log(state.cn)
        // return state;
        return {"cn":props.name}
        
    }
    render() {
        return (
            <div>
                <h3>请登录{this.state.cn}</h3>
            </div>
        )
    }
}

export default Loginin

