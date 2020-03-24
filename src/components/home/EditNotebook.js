import React, { Component } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	TextField,
	DialogActions,
	Button,
} from "@material-ui/core";

class EditNotebook extends Component {
	render() {
		const { open, close, notebook, editNotebook } = this.props;
		return (
			<div>
				<Dialog open={open}>
					<DialogTitle>Edit Notebook</DialogTitle>
					<DialogContent>
						<form
							onSubmit={event => editNotebook(event, notebook.id)}
						>
							<TextField
								name="notebookName"
								label="Notebook Name"
								defaultValue={notebook.name}
							/>
							<DialogActions>
								<Button onClick={close} color="primary">
									Close
								</Button>
								<Button type="submit" color="primary">
									Submit
								</Button>
							</DialogActions>
						</form>
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

export default EditNotebook;
