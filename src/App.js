import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/Home";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			openAddNotebookDialog: false,
			notebooks: [
				{
					id: 1,
					name: "notebook",
				},
				{
					id: 2,
					name: "notebook1",
				},
			],
			openEditDialog: false,
			editNotebook: {},
			openDeleteDialog: false,
			deleteNotebook: {},
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.addNotebook = this.addNotebook.bind(this);
		this.editNotebook = this.editNotebook.bind(this);
		this.openEditDialog = this.openEditDialog.bind(this);
		this.closeEditDialog = this.closeEditDialog.bind(this);
		this.openDeleteDialog = this.openDeleteDialog.bind(this);
		this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
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
		let id = this.state.notebooks.length + 1;
		let notebook = {};
		notebook.id = id;
		notebook.name = event.target.notebookName.value;
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

	openEditDialog(notebook) {
		console.log(notebook);
		this.setState({
			openEditDialog: true,
			editNotebook: notebook,
		});
	}

	closeEditDialog() {
		this.setState({
			openEditDialog: false,
			editNotebook: {},
		});
	}

	editNotebook = (event, id) => {
		event.preventDefault();
		let newName = event.target.notebookName.value;
		this.setState(prevState => {
			prevState.notebooks.forEach(notebook => {
				if (notebook.id === id) {
					notebook.name = newName;
				}
				return notebook;
			});
		});

		this.closeEditDialog();
	};

	openDeleteDialog(notebook) {
		this.setState({
			openDeleteDialog: true,
			deleteNotebook: notebook,
		});
	}

	closeDeleteDialog() {
		this.setState({
			openDeleteDialog: false,
			deleteNotebook: {},
		});
	}

	deleteNotebook = (event, id) => {
		event.preventDefault();
		console.log("delete");
		this.setState(prevState => {
			prevState.notebooks.forEach((notebook, index) => {
				if (notebook.id === id) {
					console.log(index);
					prevState.notebooks.splice(index, 1);
				}
			});
		});

		this.closeDeleteDialog();
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
					editState={this.state.openEditDialog}
					openEditDialog={this.openEditDialog}
					closeEditDialog={this.closeEditDialog}
					editNotebook={this.editNotebook}
					stateNotebook={this.state.editNotebook}
					openDeleteDialog={this.openDeleteDialog}
					closeDeleteDialog={this.closeDeleteDialog}
					delNotebook={this.state.deleteNotebook}
					deleteNotebook={this.deleteNotebook}
					deleteState={this.state.openDeleteDialog}
				/>
			</div>
		);
	}
}

export default App;
