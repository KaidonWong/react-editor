import React, { Component } from "react";
import { EditorContext } from "../../context";
import { IconMap } from "../../../util/IconMap";
import Dropdown from "../../dropdown";

import "./itemwithlist.scss";

const fontNameOptions = [
    "Arial",
    "Arial Black",
    "Courier New",
    "Times New Roman"
];
const fontSizeOptions = ["1", "2", "3", "4", "5", "6", "7"];

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

    getOptions = type => {
        let ret;
        switch (type) {
            case "fontName":
                ret = fontNameOptions;
                break;
            case "fontSize":
                ret = fontSizeOptions;
                break;
        }
        return ret;
    };

    render() {
        const { type, value } = this.props;
        const options = this.getOptions(type);
        // [{ name: a, val: b }, { name: c, val: d }];
        const configArr = options.map(item => ({ name: item, val: item }));
        return (
            <div className="itemwithlist">
                <i className={["iconfont",IconMap[type]].join(" ")}></i>
                <Dropdown configArr={configArr} />
            </div>
        );
    }
}

ItemWithList.contextType = EditorContext;

export default ItemWithList;
