import React from "react";
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            res_arr: ["例子未完成项目"],
            rej_arr: ["例子已完成项目"],
        }
        this.dj = this.dj.bind(this);
        this.switchs = this.switchs.bind(this);
    }
    //添加
    // dj() {
    //     let newarr = [];
    //     let val = document.getElementById("con").value;
    //     newarr.push(val);  
    //     this.setState({
    //         res_arr:[...this.state.res_arr,...newarr]
    //     })
        
    // }
    dj() {
        let newarr = [];
        let val = document.getElementById("con").value;
        newarr.push(val);  
        if(val === "输入框"){
            this.setState({
                res_arr:this.state.res_arr
            })
        }else{
            this.setState({
                res_arr:[...this.state.res_arr,...newarr]
            })
        }
    }
    // 删除
    clear_arr1(idx){
        this.state.res_arr.splice(idx, 1)
        this.setState({
            res_arr: [...this.state.res_arr]
        })
    }
    clear_arr2(idx){
        this.state.rej_arr.splice(idx, 1)
        this.setState({
            rej_arr: [...this.state.rej_arr]
        })
    }
    changes1(e){
        // this.state.rej_arr[ref].setAttribute("textDecoration","lineThrough")
        // text-decoration: line-through
        if(e.target.nextElementSibling.style.textDecoration == ''){
            e.target.nextElementSibling.style.textDecoration ='line-through';
        }else{
            e.target.nextElementSibling.style.textDecoration ='';
        }
    }
    changes2(e){
        if(e.target.nextElementSibling.style.textDecoration == ''){
            e.target.nextElementSibling.style.textDecoration ='line-through';
        }else{
            e.target.nextElementSibling.style.textDecoration ='';
        }
    }
    switchs(){
        var cc = document.getElementById("tt").children
        for(var i in cc){
            if(cc[i].checked){
                console.log("选中")
            }else{
                console.log("没选中")
            }
            
            // console.log(cc[i])
        }
    }
    render() {
    let res_lis = this.state.res_arr.map((value,index) => <div><input type="checkbox" onClick={(e)=>this.changes1(e)}></input><span>{value}</span><span onClick={()=>this.clear_arr1(index)}>删除</span></div>)
    let rej_lis = this.state.rej_arr.map((value,index) => <div><input type="checkbox" onClick={(e)=>this.changes2(e)}></input><span>{value}</span><span onClick={()=>this.clear_arr2(index)}>删除</span></div>)
        return (
            <div id="tt">
                <input type="text" placeholder="输入框" id="con" />
                <button onClick={this.dj}>添加按钮</button>
                <div>{res_lis}</div>
                <div>{rej_lis}</div>
                <button onClick={this.switchs}>已完成显示开关</button>
                <button>清除已完成</button>
            </div>
        )
    }
}

export default List;




