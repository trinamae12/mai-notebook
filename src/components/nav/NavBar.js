import React, { Component } from "react";
import { Button, AppBar, Typography } from "@material-ui/core";
import ToolBar from "@material-ui/core/Toolbar";
import AddPopUp from "../home/AddPopUp";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import styles from "../home/Home.styles";

class NavBar extends Component {
	render() {
		const { classes, openState, close, addNotebook, open } = this.props;
		return (
			<div>
				<AppBar style={{ background: "#1976d2" }} position="static">
					<ToolBar>
						<Link className={classes.navLink} to={"/"}>
							<Typography variant="h6">Mai-Notebook</Typography>
						</Link>
						<Button
							color="inherit"
							className={classes.menuButton}
							onClick={open}
						>
							Add Notebook
						</Button>
						<AddPopUp
							open={openState}
							close={close}
							addNotebook={addNotebook}
						/>
					</ToolBar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(NavBar);
