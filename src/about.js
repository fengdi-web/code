import React from 'react'
import { Link,Route } from 'react-router-dom'
import Aboutone from "./router/about-one"
import Abouttwo from "./router/about-two"
class About extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h3>About产品</h3>
                <Link to="/about/">one</Link>
                <Link to="/about/apple">two</Link>
                <div>
                    <Route path="/about/" exact component={Aboutone} />
                    <Route path="/about/apple" component={Abouttwo} />
                </div>
            </div>
        )
    }
}
export default About;




// 通配符传值
// import React from 'react'
// import { Link, Route, Switch } from 'react-router-dom'
// import Aboutone from "./router/about-one"
// import Abouttwo from "./router/about-two"
// class About extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//                 <h3>About产品</h3>
//                 <Link to="/about/lily">one</Link>
//                 <Link to="/about/apple">two</Link>
//                 <div>
//                     <Switch>
//                         <Route path="/about/:name" exact component={Aboutone} />
//                         <Route path="/about/apple" component={Abouttwo} />
//                     </Switch>
//                 </div>
//             </div>
//         )
//     }
// }
// export default About;




// query传值
// import React from 'react'
// import { Link,Route } from 'react-router-dom'
// import Aboutone from "./router/about-one"
// import Abouttwo from "./router/about-two"
// class About extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return(
//             <div>
//                 <h3>About产品</h3>
//                 <Link to={{pathname:"/about/",query:"小明"}}>one</Link>
//                 <Link to="/about/apple">two</Link>
//                 <div>
//                     <Route path="/about/" exact component={Aboutone} />
//                     <Route path="/about/apple" component={Abouttwo} />
//                 </div>
//             </div>
//         )
//     }
// }
// export default About;




// state传值
// import React from 'react'
// import { Link, Route } from 'react-router-dom'
// import Aboutone from "./router/about-one"
// import Abouttwo from "./router/about-two"
// class About extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//                 <h3>About产品</h3>
//                 <Link to={{ pathname: "/about/", query: "小明" }}>one</Link>
//                 <Link to={{ pathname: "/about/apple", state: { "name": "lily" } }}>two</Link>
//                 <div>
//                     <Route path="/about/" exact component={Aboutone} />
//                     <Route path="/about/apple" component={Abouttwo} />
//                 </div>
//             </div>
//         )
//     }
// }
// export default About;