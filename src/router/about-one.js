// 通配符
import React from 'react'
class Aboutone extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
               aboutone{this.props.match.params.name}
            </div>
        )
    }
}
export default Aboutone;




// query传值
// import React from 'react'
// class Aboutone extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return(
//             <div>
//                aboutone{this.props.location.query}
//             </div>
//         )
//     }
// }
// export default Aboutone;