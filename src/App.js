import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/Home";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			openAddNotebookDialog: false,
			notebooks: [],
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.addNotebook = this.addNotebook.bind(this);
	}

	openModal = () => {
		this.setState({
			openAddNotebookDialog: true,
		});
	};

	closeModal = () => {
		this.setState({
			openAddNotebookDialog: false,
		});
	};

	addNotebook = event => {
		event.preventDefault();
		let notebook = event.target.notebookName.value;
		this.setState(
			prevState => ({
				notebooks: [...prevState.notebooks, notebook],
			}),
			() => {
				console.log(this.state.notebooks);
			}
		);

		this.closeModal();
	};

	render() {
		return (
			<div className="App">
				<Home
					openNotebookHandler={this.openModal}
					closeNotebookHandler={this.closeModal}
					open={this.state.openAddNotebookDialog}
					notebooks={this.state.notebooks}
					addNotebook={this.addNotebook}
				/>
			</div>
		);
	}
}

export default App;
