import React, { Component } from "react";

import "./editor.scss";

class Editor extends Component {
    constructor(props) {
        super(props);
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
                ></div>
            </div>
        );
    }
}

export default Editor;
