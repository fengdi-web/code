// 16.3版本之后    获取子组件以及操作子组件
// import React from "react";
// class Son extends React.Component {
//     constructor() {
//         super();
//         this.state={
//             "name":"lily"
//         }
//     }
//     test(){
//     }
//     render() {
//         return (
//         <div>son{this.state.name}</div>
//         )
//     }
// }
// export default Son ;





// 16.3版本之后    获取子节点
// import React from "react";
// let Son1 = React.forwardRef((props,ref)=>{
//     return(
//         <div ref={ref}>hello</div>
//     )
// })
// export default Son1 ;