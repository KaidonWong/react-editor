import React, { Component } from "react";

import "./colorselector.scss";

const colors = [
	"#b80000",
	"#db3e00",
	"#fccb00",
	"#008b02",
	"#006b76",
	"#1273de",
	"#004dcf",
	"#000000",
	"#eb9694",
	"#fad0c3",
	"#fef3bd",
	"#c1e1c5",
	"#8edadc",
	"#c4def6",
	"#bed3f3",
	"#ffffff"
];

class ColorSelector extends Component {
	constructor(props) {
		super(props);
    }

	render() {
		return (
			<div className="color-selector">
				<div className="panel clearfix">
					{colors.map(item => (
						<button
                            key = {item}
							style={{ backgroundColor: item }}
                            onClick={()=>{this.props.handleClick(item)}}
						></button>
					))}
				</div>
				<div className="triangle-shadow"></div>
				<div className="triangle"></div>
			</div>
		);
	}
}

export default ColorSelector;
