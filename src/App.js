import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/Home";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			openAddNotebookDialog: false,
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal = () => {
		this.setState({
			openAddNotebookDialog: true,
		});
		console.log(this.state.openAddNotebookDialog);
	};

	closeModal = () => {
		this.setState({
			openAddNotebookDialog: false,
		});
		console.log(this.state.openAddNotebookDialog);
	};

	render() {
		return (
			<div className="App">
				<Home
					addNotebookHandler={this.openModal}
					closeNotebookHandler={this.closeModal}
					open={this.state.openAddNotebookDialog}
				/>
			</div>
		);
	}
}

export default App;
