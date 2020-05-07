import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了，Index页面')
        return() => {
            console.log("老弟你走了")
        }
    },[])
    return (
        <h1>Index</h1>
    )
}

function List() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了，List页面')
    })
    return (
        <h1>List</h1>
    )
}

function Example3() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`useEffect => You click ${count} times`)
        return () => {
            console.log("================")
        }
    },[count])
    return (
        <div>
            <p>You cliCk {count}times</p>
            <button onClick={() => { setCount(count + 1) }}>点击</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>

    )
}

export default Example3