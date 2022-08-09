import React, { Component } from "react";
import Form from "./form.js";
import "../css/app.css";

class App extends Component {
	state = {
		count: 0,
	};

	updateCount = (value) => {
		this.setState({ count: value });
	};

	handleIncrement = () => {
		this.updateCount(this.state.count + 1);
	};

	handleDecrement = () => {
		this.updateCount(this.state.count - 1);
	};

	render() {
		return (
			<div className="App">
				<Form updateCount={this.updateCount} />
				<h1>{this.state.count}</h1>
				<button
					onClick={this.handleIncrement}
					className="increaseButton"
				>
					+
				</button>
				<button
					onClick={this.handleDecrement}
					className="decreaseButton"
				>
					-
				</button>
			</div>
		);
	}
}

export default App;
