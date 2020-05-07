// 商品添加购物车
import { createStore} from 'redux';
import add_reducer from "./reducer.js"
import { composeWithDevTools } from 'redux-devtools-extension';
/* 初始的商品信息 */
const initialState = {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}


let s_store = createStore(
    add_reducer,
    composeWithDevTools()
    );
export { s_store, initialState }




//thunk异步
// import {createStore,applyMiddleware} from "redux";
// import thunk from "redux-thunk";
// import add_reducer from "./reducer.js"
// /* 初始的商品信息 */
// const initialState = {
//     cart: [
//         {
//             product: 'bread 700g',
//             quantity: 2,
//             unitCost: 90
//         },
//         {
//             product: 'milk 500ml',
//             quantity: 1,
//             unitCost: 47
//         }
//     ]
// }


// let s_store = createStore(add_reducer,applyMiddleware(thunk));
// export  {s_store,initialState}




// saga
// import {createStore,applyMiddleware} from "redux";
// import {take,call,put,select,fork,takeEvery,takeLatest} from 'redux-saga/effects'
// import add_reducer from "./reducer.js";
// import createSageMiddleware from "redux-saga";
// import add_goods from "./saga"
// const createSageMiddleware = createSageMiddleware();
// /* 初始的商品信息 */
// const initialState = {
//     cart: [
//         {
//             product: 'bread 700g',
//             quantity: 2,
//             unitCost: 90
//         },
//         {
//             product: 'milk 500ml',
//             quantity: 1,
//             unitCost: 47
//         }
//     ]
// }


// let s_store = createStore(add_reducer,applyMiddleware(createSageMiddleware));

// createSageMiddleware.run(add_goods);

// export  {s_store,initialState}