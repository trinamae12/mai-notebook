import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import {} from "react-router-dom";

import styles from "./Home.styles";
import Notebook from "../notebook/Notebook";

class Home extends Component {
	render() {
		const {
			classes,
			notebooks,
			openEditDialog,
			editState,
			closeEditDialog,
			editNotebook,
			stateNotebook,
			openDeleteDialog,
			closeDeleteDialog,
			delNotebook,
			deleteNotebook,
			deleteState,
		} = this.props;

		return (
			<div>
				<Container className={classes.container}>
					<Grid container item xs={12} spacing={4}>
						{notebooks.length !== 0
							? notebooks.map((notebook) => {
									return (
										<React.Fragment>
											<Notebook
												key={notebook.id}
												notebook={notebook}
												openEditDialog={openEditDialog}
												closeEditDialog={
													closeEditDialog
												}
												editState={editState}
												editNotebook={editNotebook}
												stateNotebook={stateNotebook}
												openDeleteDialog={
													openDeleteDialog
												}
												closeDeleteDialog={
													closeDeleteDialog
												}
												delNotebook={delNotebook}
												deleteNotebook={deleteNotebook}
												deleteState={deleteState}
											/>
										</React.Fragment>
									);
							  })
							: "No notebooks"}
					</Grid>
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(Home);
