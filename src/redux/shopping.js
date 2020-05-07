// 商品添加购物车
import React from 'react';
import { s_store, initialState } from "./store";
import add_action from "./action";
class Shopping extends React.Component {
    constructor(props) {
        super(props)
        // this.state={
        //     f:"1"
        // }
        this.add_update = this.add_update.bind(this)
    }
    add_update() {
        this.forceUpdate();
        s_store.dispatch(add_action({
            product: 'apple 700g',
            quantity: 6,
            unitCost: 99
        }))
    }
    render() {
        return (
            <div>
                <div>
                    {s_store.getState().cart.map((value, index) => {
                        return <p key={index}><span>{value.product}{value.quantity}{value.unitCost}</span></p>
                    })}
                </div>
                <button onClick={this.add_update}>添加商品</button>
            </div>
        )
    }
}
//监听
// store.subscribe(() =>
//     Shopping.setState({ f: "2" })
// );

export default Shopping;




//thunk异步
// import React from 'react';
// import { s_store, initialState } from "./store";
// import add_action from "./action";
// class Shopping extends React.Component {
//     constructor(props) {
//         super(props)
//         this.add_update = this.add_update.bind(this)
//     }
//     add_update() {
//         add_action(s_store.dispatch, {
//             product: 'apple 700g',
//             quantity: 6,
//             unitCost: 99
//         })
//         s_store.subscribe(() => {
//             console.log(s_store.getState())
//             this.forceUpdate()
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <div>
//                     {s_store.getState().cart.map((value, index) => {
//                         return <p key={index}><span>{value.product}{value.quantity}{value.unitCost}</span></p>
//                     })}
//                 </div>
//                 <button onClick={this.add_update}>添加商品</button>
//             </div>
//         )
//     }
// }


// export default Shopping;





// saga
// import React from 'react';
// import { s_store, initialState } from "./store";
// import add_action from "./action";
// class Shopping extends React.Component {
//     constructor(props) {
//         super(props)
//         this.add_update = this.add_update.bind(this)
//     }
//     add_update() {
//         this.forceUpdate();
//         add_action(s_store.dispatch, {
//             product: 'apple 700g',
//             quantity: 6,
//             unitCost: 99
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <div>
//                     {s_store.getState().cart.map((value, index) => {
//                         return <p key={index}><span>{value.product}{value.quantity}{value.unitCost}</span></p>
//                     })}
//                 </div>
//                 <button onClick={this.add_update}>添加商品</button>
//             </div>
//         )
//     }
// }
// s_store.subscribe(() =>
//      console.log(s_store.getState())
// );

// export default Shopping;