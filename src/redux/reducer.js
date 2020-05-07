// 商品添加购物车
import {initialState } from "./store";
function add_reducer(state=initialState,action){
     switch(action.type){
        case "add_g":
        return{...state,cart:[...state.cart, action.payload]}
        default:return state;
     }
}

export default add_reducer;



//thunk异步
// import {initialState } from "./store";
// function add_reducer(state=initialState,action){
//      switch(action.type){
//         case "add_g":
//         return{...state,cart:[...state.cart, action.payload]}
//         default:return state;
//      }
// }

// export default add_reducer;




// saga
// import {initialState } from "./store";
// function add_reducer(state=initialState,action){
//      switch(action.type){
//         case "add_g":
//         return{...state,cart:[...state.cart, action.payload]}
//         default:return state;
//      }
// }

// export default add_reducer;