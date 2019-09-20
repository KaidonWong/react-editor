import React, { Component } from "react";
import "./dropdown.scss";

// [{ name: a, val: b }, { name: c, val: d }];

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.configArr[0].val
        };
    }

    handleChange=(e)=>{
        this.setState({value:e.target.value})
    }

    render() {
        const { configArr } = this.props;
        let options = configArr.map(item => (
            <option key={item.val} value={item.val}>
                {item.name}
            </option>
        ));
        return (
            <select className="dropdown-react" value={this.state.value} onChange={this.handleChange}>
                {options}
            </select>
        );
    }
}

export default Dropdown;
