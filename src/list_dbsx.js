import React from "react";
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            qh: "block"
        }
        this.add = this.add.bind(this);
    }
    // 添加
    add() {
        let val = this.refs.myInput.value;
        let newarr = [{ title: val, changes: 'no' }];
        this.setState({
            arr: [...this.state.arr, ...newarr]
        })
    }
    // 删除
    del(idx) {
        this.state.arr.splice(idx, 1)
        this.setState({
            arr: [...this.state.arr]
        })
    }
    //添加中划线
    addline(e, idx) {
        if (e.target.nextElementSibling.style.textDecoration == '') {
            e.target.nextElementSibling.style.textDecoration = 'line-through';
            e.target.parentElement.style.display = this.state.qh;
            this.state.arr[idx].changes = "yes"
        } else {
            e.target.nextElementSibling.style.textDecoration = '';
        }
    }
    //已完成显示开关
    yc() {
        let findarr = [];
        this.state.arr.filter(item => {
            if (item.changes.includes("no")) {
                this.setState({
                    qh:"block"
                })
            }
            if (item.changes.includes("yes")) {
                this.setState({
                    qh:"none"
                })
                findarr.push(item)
            }
        })
        this.setState({
            arr: [...findarr]
        })
    }
    render() {
        let tit = this.state.arr.map((value, index) => <div key={index}><input type="checkbox" onClick={(e) => this.addline(e, index)} /><span>{value.title}</span><span onClick={() => this.del(index)}>删除</span></div>)
        return (
            <div>
                <input type="text" ref="myInput" />
                <button onClick={this.add}>添加按钮</button>
                <div>{tit}</div>
                <button onClick={() => this.yc()}>已完成显示开关</button>
                <button>清除已完成</button>
            </div>
        )
    }
}

export default List;