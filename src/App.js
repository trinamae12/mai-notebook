import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Notes from "./components/notes/Notes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/nav/NavBar";

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

		this.generateId = this.generateId.bind(this);
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

	generateId = () => {
		let ids = [];
		let largestId = 1;
		if (this.state.notebooks.length !== 0) {
			this.state.notebooks.map((notebook) => {
				ids.push(notebook.id);
				return ids;
			});
			largestId = Math.max(...ids);
			return largestId + 1;
		} else {
			return largestId;
		}
	};

	addNotebook = (event) => {
		event.preventDefault();
		let id = this.generateId();
		let notebook = {};
		notebook.id = id;
		notebook.name = event.target.notebookName.value;
		this.setState((prevState) => ({
			notebooks: [...prevState.notebooks, notebook],
		}));

		this.closeModal();
	};

	openEditDialog(notebook) {
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
		this.setState((prevState) => {
			prevState.notebooks.forEach((notebook) => {
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
		this.setState((prevState) => {
			prevState.notebooks.forEach((notebook, index) => {
				if (notebook.id === id) {
					prevState.notebooks.splice(index, 1);
				}
			});
		});

		this.closeDeleteDialog();
	};

	render() {
		return (
			<Router>
				<div className="App">
					<NavBar
						openState={this.state.openAddNotebookDialog}
						close={this.closeModal}
						addNotebook={this.addNotebook}
						open={this.openModal}
					/>
					<Switch>
						<Route
							path="/"
							exact
							component={() => (
								<Home
									notebooks={this.state.notebooks}
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
							)}
						/>
						<Route path="/notebook/:id" component={Notes} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
