import React from 'react'
class Zs extends React.Component{
    constructor(props){
        super(props)
        this.state={content:[],show:"sh"}
    }
    change(){
      this.setState({
       content:[...this.state.content,{name:this.refs.myinput.value,indexn:true,hide:"block"}]
      }) 
      this.refs.myinput.value=""
       console.log(this.state.content)
      
    }
    display(index1){
        this.setState({content:this.state.content.map((item,index)=>{
            if(index==index1){
                item.indexn=!item.indexn
            }
            return item
        })})
    }
    del(index){
        this.state.content.splice(index,1)
        this.setState({
            content:[...this.state.content]
           }) 
         }
    delall(){
        let newcontent=this.state.content;
        for(var i=0;i<newcontent.length;i++){
            if(newcontent[i].indexn==false){
                newcontent.splice(i,1)
                i--;
            }
        }
      this.setState({content:newcontent})
    }
    hiddle(){
        if(this.state.show=="sh"){
            for(var i in this.state.content){
                if(this.state.content[i].indexn==false){
                     this.state.content[i].hide="none"
                     console.log(this.state.content[i].hide)
                }
            }
            this.setState({show:"hh"})
        }
        else{
            for(var i in this.state.content){
                     this.state.content[i].hide="block"
            }
            this.setState({show:"sh"})
        }
    }
    render(){
        let h1={textDecoration:"line-through"}
        let h2={textDecoration:"none"}
        return(
            <div>
                <input type="text" ref="myinput"></input><button onClick={()=>{this.change()}}>添加</button>
               <ul>
                 {this.state.content.map((value,index)=>{
                     return(
                     <li key={index} style={{display:value.hide}}>
                     <span onClick={()=>{this.display(index)}}>完成</span>
                     <span style={value.indexn?h2:h1}>{value.name}</span>
                     <span onClick={()=>{this.del(index)}}>删除</span>
                     </li>
                     )
                 })}
               </ul>
               <button onClick={()=>this.delall()}>清除已完成</button>
               <button onClick={()=>this.hiddle()}>隐藏已完成</button>
            </div>
        )
    }
}
export default Zs;