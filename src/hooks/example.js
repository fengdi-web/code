import React,{useState} from 'react';

function Example() {
    const [count, setCount] = useState(0)   // 声明一个新的叫做 “count” 的 state 变量
    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={() => {setCount(count+1)}}>点击</button>
        </div>
    )
}


export default Example;