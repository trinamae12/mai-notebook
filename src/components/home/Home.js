import React, { Component } from "react";
import ToolBar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, AppBar, Typography, Container } from "@material-ui/core";

import styles from "./Home.styles";
import AddPopUp from "./AddPopUp";
import Notebook from "./Notebook";

class Home extends Component {
	render() {
		const {
			classes,
			openNotebookHandler,
			open,
			closeNotebookHandler,
			notebooks,
			addNotebook,
		} = this.props;

		return (
			<div>
				<AppBar style={{ background: "#1976d2" }} position="static">
					<ToolBar>
						<Typography variant="h6">Mai-Notebook</Typography>
						<Button
							color="inherit"
							className={classes.menuButton}
							onClick={openNotebookHandler}
						>
							Add Notebook
						</Button>
						<AddPopUp
							open={open}
							close={closeNotebookHandler}
							addNotebook={addNotebook}
						/>
					</ToolBar>
				</AppBar>

				<Container className={classes.container}>
					<Grid container item xs={12} spacing={4}>
						{notebooks.length !== 0
							? notebooks.map((notebook, index) => {
									return (
										<Notebook key={index} name={notebook} />
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
