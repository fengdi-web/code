import React from "react";
import add_action from "./zaction";
import {s_store} from "./zstore";
class Sp extends React.Component{
    constructor(props){
        super(props)
        this.add_car = this.add_car.bind(this);
    }
    add_car(){
        this.forceUpdate();
        s_store.dispatch(add_action({
            "cp":"dog",
            "jg":99,
            "zl":100
        }))
    }
    render(){
        return(
            <div>
                <div>
                    {s_store.getState().cars.map((value,index)=>{
                    return <p key={index}><span>{value.cp}{value.jg}{value.zl}</span></p>
                    })}
                </div>
                <button onClick={this.add_car}>点击添加</button>
            </div>
        )
    }
}

export default Sp;