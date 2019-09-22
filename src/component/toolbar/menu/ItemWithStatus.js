import React, { Component } from "react";
import { EditorContext } from "../../context";
import { IconMap } from "../../../util/IconMap";
import "./itemwithstatus.scss";

class ItemWithStatus extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = e => {
        const { type } = this.props;
        const editorDom = this.context;
        this.execCommand(type);
        editorDom.focus();
    };

    execCommand(cmd, value) {
        document.execCommand(cmd, false, value);
    }

    render() {
        const { type, value } = this.props;
        return (
            <button
                className={["toolbar-menu-li", value ? "active" : ""].join(
                    " "
                )}
                onClick={this.handleClick}
            >
                <i className={["iconfont", IconMap[type]].join(" ")}></i>
            </button>
        );
    }
}

ItemWithStatus.contextType = EditorContext;

export default ItemWithStatus;
