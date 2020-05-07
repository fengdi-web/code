import React, { useState } from 'react';

let show = true;

function Example2() {
    const [age, setAge] = useState(18)
    // if (show) {
    //     const [sex, setSex] = useState('女')      //useState不能存在于条件判断语句中
    //     show = false
    // }
    const [sex, setSex] = useState('女')
    const [work, setWork] = useState('前端开发攻城狮')
    return (
        <div>
            <p>SUGER今年：{age}岁</p>
            <p>性别：{sex}</p>
            <p>工作是：{work}</p>
        </div>
    )
}

export default Example2;