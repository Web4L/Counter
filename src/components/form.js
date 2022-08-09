import React, { Component } from "react";
import "../css/form.css";

class Form extends Component {
	state = {
		inputValue: "",
	};

	handleInputChange = (event) => {
		this.setState({ inputValue: event.target.value });
	};

	handleInputSubmit = (event) => {
		event.preventDefault();
		this.setState({ inputValue: "" });
		let numberSubmitted = Number(this.state.inputValue);
		if (isNaN(numberSubmitted)) {
			console.log("jit not a number");
			return;
		}
		this.props.updateCount(numberSubmitted);
	};

	render() {
		return (
			<form onSubmit={this.handleInputSubmit}>
				<input
					type="text"
					value={this.state.inputValue}
					onChange={this.handleInputChange}
				/>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Form;
