import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { TextField } from "@material-ui/core";

class AddPopUp extends Component {
	render() {
		const { open, close, addNotebook } = this.props;

		return (
			<div>
				<Dialog open={open}>
					<DialogTitle>New Notebook</DialogTitle>
					<DialogContent>
						<form onSubmit={addNotebook}>
							<TextField
								name="notebookName"
								label="New Notebook Name"
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

export default AddPopUp;
