import React from "react";
import middle from "./gj1";
class Welcome extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>welcome{this.props.user}</div>
        )
    }
}
var Wce = middle(Welcome);
export default Wce;