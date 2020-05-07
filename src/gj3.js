import React from "react";
import middle from "./gj1";
class Goodbye extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>goodbye{this.props.user}</div>
        )
    }
}
var Gbc = middle(Goodbye)
export default Gbc ;




