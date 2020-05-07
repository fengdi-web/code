import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';



// import Wce from "./gj2";
// import Gbc from "./gj3";
// ReactDOM.render(<Wce />,document.getElementById("root"));
// ReactDOM.render(<Gbc />,document.getElementById("con"));




// refs
// import Gbc from "./refs1";
// ReactDOM.render(<Gbc />,document.getElementById("root"));



// 事件
// import Sj from "./shijian";
// ReactDOM.render(<Sj />,document.getElementById("root"));

// 项目---斯品家居
// import Spjj from "./spjj"
// ReactDOM.render(<Spjj />,document.getElementById("root"))



// Map()
// import Sj from "./map";
// import { HashRouter} from 'react-router-dom'
// ReactDOM.render(<Sj />,document.getElementById("root"));


// 二级导航
// import Father from './hello';
// ReactDOM.render(<Father />,
//   document.getElementById('root')
// );



// Map--router
// import Sj from "./map";
// import Home from "./home";
// import About from "./about";
// import Inbox from "./inbox";
// import { HashRouter, Route } from 'react-router-dom'
// ReactDOM.render(<HashRouter><Sj>
//     <Route path="/" exact component={Home} />
//     <Route path="/about" component={About} />
//     <Route path="/inbox" component={Inbox} />
// </Sj></HashRouter>, document.getElementById("root"));


// // antd
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// import Shopping from "./father";
// ReactDOM.render(<Shopping />,document.getElementById("root"));



// redux2
// import Sp from "./redux/shopping";
// ReactDOM.render(<Sp />,document.getElementById("root"));




// redux3
// import Sp from "./redux/zsp";
// ReactDOM.render(<Sp />,document.getElementById("root"));


//react-redux
// import App from "./react-redux/App";
// import {createStore} from 'redux';
// import { Provider } from 'react-redux';
// import themeReducer from './react-redux/reducer';
// const store = createStore(themeReducer);

// ReactDOM.render(
//     //Provider包裹在App外边，然后传递给其一个 store 这样所有其包裹的子组件都可以使用 store 上存储的数据了
//     <Provider store={store}> 
//         <App />
//     </Provider>, document.getElementById('root'));



// 待办事项列表
// import List from "./list_dbsx";
// ReactDOM.render(<List />,document.getElementById("root"))


// 表单验证
// import Yz from "./bd";
// ReactDOM.render(<Yz />,document.getElementById("root"))


// bootatrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';
// import Bs from './bs';
// ReactDOM.render(<Bs />,document.getElementById('root'))


// 豆瓣
// import Db from './db';
// ReactDOM.render(<Db />,document.getElementById('root'))


//增删改查
// import Push from './push'
// ReactDOM.render(<Push />,document.getElementById('root'))


//分页功能
// import Page from './page'
// ReactDOM.render(<Page />,document.getElementById('root'))

//防抖功能
// import PaUnDebouncege from './fd'
// ReactDOM.render(<PaUnDebouncege />,document.getElementById('root'))


// hoohs
// 例一：
// import Example from '../src/hooks/example'
// ReactDOM.render(<Example />,document.getElementById('root'))
// 例二
// import Example2 from '../src/hooks/example2'
// ReactDOM.render(<Example2 />,document.getElementById('root'))
// 例三
// import Example3 from '../src/hooks/example3'
// ReactDOM.render(<Example3 />, document.getElementById('root'))
// 例四
// import Example4 from '../src/hooks/example4'
// ReactDOM.render(<Example4 />, document.getElementById('root'))
// 例五
// import Example5 from '../src/hooks/example5'
// ReactDOM.render(<Example5 />, document.getElementById('root'))
// 例六
import Example6 from '../src/hooks/example6/Example6'
ReactDOM.render(<Example6 />, document.getElementById('root'))
serviceWorker.unregister();




