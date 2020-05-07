import React from 'react';
import Children1 from './child';
import './style.css';
class Father extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = {
            nav: [
                { id: 0, first: "产品1列表", fc: ["产品1", "产品2", "产品3"] },
                { id: 1, first: "产品2列表", fc: ["产品11", "产品2", "产品3"] },
                { id: 2, first: "产品3列表", fc: ["产品12", "产品2", "产品3"] }
            ],
            sh: 0
        }
    }
    shows(e) {
        var f = e.target.getAttribute("data-index")
        this.setState({
            sh: f
        })
    }
    // hides() {
    //     this.setState({
    //         sh: "none"
    //     })
    // }
    render() {
        return (
            <div>
                <ul className="nav">
                    {this.state.nav.map((item, index) => {
                        return <li key={item.id} 
                                   onMouseEnter={(e) => this.shows(e)} 
                                   data-index={item.id}>
                                   {item.first}
                                   {index == this.state.sh ?<Children1 fc={item.fc} /> : null}
                               </li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Father;