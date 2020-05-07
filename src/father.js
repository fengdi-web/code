// import React from 'react';
// import { createStore,combineReducers } from "redux";

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

// /*reducer*/
// const productsReducer = function(state=[], action) {
//     return state;
// }
// /*添加商品的reducer*/
// const cartReducer = function(state=initialState, action) {
//     switch (action.type) {
//         case ADD_TO_CART: {
//             return {
//                 ...state,
//                 cart: [...state.cart, action.payload]
//             }
//         }
//         default:
//             return state;
//     }
// }

// /*action函数*/
// const ADD_TO_CART = 'ADD_TO_CART';
// function addToCart(product, quantity, unitCost) {
//     return {
//         type: ADD_TO_CART,
//         payload: {
//             product,
//             quantity,
//             unitCost
//         }
//     }
// }
// /*合并reducers*/
// const allReducers = {
//     products: productsReducer,
//     shoppingCart: cartReducer
// }
// const rootReducer = combineReducers(allReducers);
// /*创建store*/
// let store = createStore(rootReducer);

// let unsubscribe = store.subscribe(() =>
//      console.log(store.getState())
// );

// unsubscribe();
// /*react组件，渲染商品以及触发添加操作*/
// class Shopping extends React.Component{
//     constructor(){
//         super();
//         this.updata=this.updata.bind(this);
//     }
//     updata(){
//         this.forceUpdate(); //强制组件渲染
//         store.dispatch(addToCart('Juice 2L', 1, 500)); 
//     }
//     render(){
//         let list=store.getState().shoppingCart.cart.map(function(item,index){
//                  return <p key={index}>{item.product}{item.quantity}{item.unitCost}</p> 
//                })
//         return(
//             <div>
//                {list}
//                <button onClick={this.updata}>修改</button>
//             </div>

//         )
//     }
// }
// export default Shopping;





import React from 'react';
import { Button,Dropdown,Icon} from 'antd';
class Shopping extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Button type="primary" ghost="true">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed" icon="dingding">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>
                <Icon type="undo" style={{fontSize:30}} spin="true" />
            </div>
        )
    }
}
export default Shopping;