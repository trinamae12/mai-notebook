import React, { Component } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Box,
	DialogActions,
	Button,
} from "@material-ui/core";

class DeleteNotebook extends Component {
	render() {
		const { open, close, notebook, deleteNotebook } = this.props;
		return (
			<div>
				<Dialog open={open}>
					<DialogTitle>Delete Notebook</DialogTitle>
					<DialogContent>
						<form
							onSubmit={event =>
								deleteNotebook(event, notebook.id)
							}
						>
							<h3>Do you wish to delete this notebook?</h3>
							<Box display="flex" justifyContent="center">
								<DialogActions>
									<Box>
										<Button type="submit" color="secondary">
											YES
										</Button>
									</Box>
									<Box>
										<Button onClick={close} color="primary">
											NO
										</Button>
									</Box>
								</DialogActions>
							</Box>
						</form>
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

export default DeleteNotebook;
