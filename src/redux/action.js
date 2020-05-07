// 商品添加购物车
function add_action(goods){
    return{
        type:"add_g",
        payload:goods
    }
}
export default add_action;



//thunk异步
// function add_action(dispatch, goods) {
//     setTimeout(function () {
//         dispatch({
//             type: "add_g",
//             payload: goods 
//         })
//     }, 3000)
// }
// export default add_action;



// saga
// function add_action(goods){
//     return{
//         type:"add_g",
//         payload:goods
//     }
// }
// export default add_action;