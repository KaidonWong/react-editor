import React, { Component } from "react";

import ItemWithStatus from "./ItemWithStatus";
import ItemWithColor from "./ItemWithColor";
import ItemWithList from "./ItemWithList";
import {
	cmdWithStatus,
	cmdWithList,
	cmdWithColor
} from "../../../util/CmdList";

import "./menu.scss";

class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		//被激活的图标属性
		const { activeConfig } = this.props;
		return (
			<ul className="toolbar-menu-ul clearfix">
				{cmdWithList.map(item => (
					<ItemWithList key={item} type={item} value={activeConfig[item]} />
				))}
				<div style={{ width: "20px" }}></div>
				{cmdWithStatus.map(item => (
					<ItemWithStatus key={item} type={item} value={activeConfig[item]} />
				))}
				{cmdWithColor.map(item => (
					<ItemWithColor key={item} type={item} />
				))}
			</ul>
		);
	}
}

export default Menu;
