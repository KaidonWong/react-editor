import React, { Component } from "react";
import { EditorContext } from "../../context";
import { IconMap } from "../../../util/IconMap";
import Dropdown from "../../dropdown";
import {fontNameOptions,fontSizeOptions,getNameFromVal} from "../../../util/FontOption"

import "./itemwithlist.scss";

class ItemWithList extends Component {
	constructor(props) {
		super(props);
	}

	handleChange = e => {
        const { type } = this.props;
        const value = getNameFromVal(type, e.target.value);
		const editorDom = this.context;
		this.execCommand(type,value);
		editorDom.focus();
	};

	execCommand(cmd, value) {
		document.execCommand(cmd, false, value);
	}

	getOptions = type => {
		let ret;
		switch (type) {
			case "fontname":
				ret = fontNameOptions;
				break;
			case "fontsize":
				ret = fontSizeOptions;
				break;
		}
		return ret;
	};

	render() {
		const { type, value } = this.props;
		const options = this.getOptions(type);
		const configArr = options.map(item => ({ name: item.name, val: item.val }));
		return (
			<div className="itemwithlist">
				<i className={["iconfont", IconMap[type]].join(" ")}></i>
				<Dropdown
					configArr={configArr}
					currentVal={value}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}

ItemWithList.contextType = EditorContext;

export default ItemWithList;
