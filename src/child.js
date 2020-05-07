import React from 'react';
class Child extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul>
                {this.props.fc.map((item,index)=><li key={index}>{item}</li>)}
            </ul>
        )
    }
}
export default Child;