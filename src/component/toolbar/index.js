import React, { Component } from "react";
import Frame from "./frame";
import Menu from "./menu";

class Toolbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { activeConfig} = this.props;

        return (
            <Frame>
                <Menu activeConfig={activeConfig} ></Menu>
            </Frame>
        );
    }
}

export default Toolbar;
