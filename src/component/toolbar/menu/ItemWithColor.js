import React, { Component } from "react";
import { EditorContext } from "../../context";
import { IconMap } from "../../../util/IconMap";

import "./itemwithcolor.scss";


class ItemWithList extends Component {
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
            <div className="itemwithcolor">
                <i className={["iconfont",IconMap[type]].join(" ")}></i>
              
            </div>
        );
    }
}

ItemWithList.contextType = EditorContext;

export default ItemWithList;
