import React, { Component } from "react";
import "./dropdown.scss";

// [{ name: a, val: b }, { name: c, val: d }];

class Dropdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { configArr, currentVal,handleChange } = this.props;
        let options = configArr.map(item => (
            <option key={item.val} value={item.val}>
                {item.name}
            </option>
        ));
        return (
            <select className="dropdown-react" value={currentVal} onChange={handleChange}>
                {options}
            </select>
        );
    }
}

export default Dropdown;
