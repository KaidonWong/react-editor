import React, { Component } from "react";
import "./frame.scss";

class Frame extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return <div className="toolbar-frame">{children}</div>;
    }
}

export default Frame;
