import React from 'react'
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h3>Home首页</h3>
            </div>
        )
    }
}
export default Home;





// import React from 'react'
// import { Link,Route } from 'react-router-dom'
// import One from "./router/one"
// import Two from "./router/two"
// class Home extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return(
//             <div>
//                 <h3>Home首页</h3>
//                 <Link to="/">one</Link>
//                 <Link to="/two/">two</Link>
//                 <div>
//                     <Route path="/" exact component={One} />
//                     <Route path="/two/" component={Two} />
//                 </div>
//             </div>
//         )
//     }
// }
// export default Home;