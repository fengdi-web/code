import React from "react";
class Loginout extends React.Component{
    constructor(props){
        super()
        this.ff = this.ff.bind(this)
    }
    ff(){
        this.props.cf(true)
    }
    render(){
        return(
            <div>
            <div><h3>欢迎</h3></div>
            <button onClick={this.ff}>退出</button>
            </div>
        )
    }
}

export default Loginout