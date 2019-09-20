import React, { Component } from "react";
import { EditorContext } from "../../context";
import {IconMap} from "./IconMap";
import "./itemwithstatus.scss";

// activeConfig: {
//     bold: false,
//     italic: false,
//     underline: false,
//     strikeThrough: false,
//     justifyLeft: false,
//     justifyRight: false,
//     justifyCenter: false,
//     insertOrderedList: false,
//     insertUnorderedList: false,

//     //outdent   indent  没有状态

//     fontName: "Arial",
//     fontSize: 5, //1-7
//     foreColor: "#aaa",
//     backColor: "#aaa"
// }

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
