import React, { Component } from "react";
import { EditorContext } from "../context";

import "./editor.scss";

class Editor extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// setTimeout(()=>{
		//     const editorDom = this.context;
		//     editorDom.focus();
		//     document.execCommand("fontname",false,"Arial");
		//     document.execCommand("fontsize",false,"3");
		// },500);
	}

	render() {
		const { getEditor, updateCmdStatus } = this.props;
		return (
			<div className="editor-frame">
				<div
					className="editor-content"
					contentEditable
					ref={getEditor}
					onMouseUp={updateCmdStatus}
					onKeyUp={updateCmdStatus}
				>
					<font face="Arial" size="3"></font>
				</div>
			</div>
		);
	}
}

Editor.contextType = EditorContext;

export default Editor;
