import React, { Component } from "react";
import { EditorContext } from "../../context";
import { IconMap } from "../../../util/IconMap";
import ColorSelector from "../../colorSelector";

import "./itemwithcolor.scss";

class ItemWithColor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSel: false
		};
	}

	handleClick = (color) => {
		const { type } = this.props;
		const editorDom = this.context;
		this.execCommand(type,color);
		editorDom.focus();
	};

	toggleSelShow = () => {
		this.setState(state => {
			return { showSel: !state.showSel };
		});
    };
    
    hideSel = () => {
        setTimeout(()=>{
            this.setState({showSel: false});
        },200);
    }

	execCommand(cmd, value) {
		document.execCommand(cmd, false, value);
	}

	render() {
		const { type, value } = this.props;
		const { showSel } = this.state;
		return (
			<div className="item-with-color" onBlur={this.hideSel}>
				<button onClick={this.toggleSelShow}>
					<i className={["iconfont", IconMap[type]].join(" ")}></i>
				</button>
				<div
					className="color-selector-container"
					style={{ visibility: showSel ? "visible" : "hidden" }}
				>
					<ColorSelector handleClick={this.handleClick}/>
				</div>
			</div>
		);
	}
}

ItemWithColor.contextType = EditorContext;

export default ItemWithColor;
