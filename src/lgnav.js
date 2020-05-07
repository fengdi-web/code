// 二级导航
import React from "react";
class Son extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
           <ul>
               {this.props.cc}
           </ul> 
        )
    }
}

export default Son