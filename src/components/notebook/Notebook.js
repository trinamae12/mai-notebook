import React, { Component } from "react";
import {
	Grid,
	Card,
	CardContent,
	Typography,
	ButtonGroup,
	Button,
	Box,
} from "@material-ui/core";
import BookIcon from "@material-ui/icons/Book";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

import styles from "../home/Home.styles";
import EditNotebook from "./EditNotebook";
import DeleteNotebook from "./DeleteNotebook";

import { Link } from "react-router-dom";

class Notebook extends Component {
	render() {
		const {
			classes,
			notebook,
			openEditDialog,
			closeEditDialog,
			editState,
			editNotebook,
			stateNotebook,
			openDeleteDialog,
			closeDeleteDialog,
			delNotebook,
			deleteNotebook,
			deleteState,
		} = this.props;
		return (
			<>
				<Grid item xs={3}>
					<Card className={classes.card}>
						<Box
							display="flex"
							flexDirection="row"
							bgcolor="grey.300"
						>
							<Box flexGrow={1}>
								<BookIcon fontSize="large" />
							</Box>
							<ButtonGroup variant="text" size="small">
								<Button
									color="primary"
									onClick={() => openEditDialog(notebook)}
								>
									<EditIcon />
								</Button>
								<Button color="secondary">
									<DeleteIcon
										onClick={() =>
											openDeleteDialog(notebook)
										}
									/>
								</Button>
							</ButtonGroup>
						</Box>
						<CardContent className={classes.content}>
							<Link to={`/notebook/${notebook.id}`}>
								<Typography variant="h5">
									{notebook.name}
								</Typography>
							</Link>
						</CardContent>
					</Card>
				</Grid>
				<EditNotebook
					open={editState}
					close={closeEditDialog}
					notebook={stateNotebook}
					editNotebook={editNotebook}
				/>
				<DeleteNotebook
					open={deleteState}
					close={closeDeleteDialog}
					notebook={delNotebook}
					deleteNotebook={deleteNotebook}
				/>
			</>
		);
	}
}

export default withStyles(styles)(Notebook);
