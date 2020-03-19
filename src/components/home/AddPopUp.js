import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

class AddPopUp extends Component {
	render() {
		const { open, close } = this.props;

		return (
			<div>
				<Dialog open={open}>
					<DialogTitle>Add Notebook</DialogTitle>
					<DialogContent>Dialog Content</DialogContent>
					<DialogActions>
						<Button onClick={close}>Close</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default AddPopUp;
