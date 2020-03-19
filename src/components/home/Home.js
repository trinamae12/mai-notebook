import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Container, CardActionArea } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import BookIcon from "@material-ui/icons/Book";

import styles from "./Home.styles";
import AddPopUp from "./AddPopUp";

class Home extends Component {
	render() {
		const {
			classes,
			addNotebookHandler,
			open,
			closeNotebookHandler,
		} = this.props;

		return (
			<div>
				<AppBar style={{ background: "#1976d2" }} position="static">
					<ToolBar>
						<Typography variant="h6">Mai-Notebook</Typography>
						{/* <Button
							className={classes.menuButton}
							color="inherit"
							onClick={openModal}
						>
							Add Notebook
						</Button> */}
						<Button
							color="inherit"
							className={classes.menuButton}
							onClick={addNotebookHandler}
						>
							Add Notebook
						</Button>
						<AddPopUp open={open} close={closeNotebookHandler} />
					</ToolBar>
				</AppBar>
				{/* <Container className={classes.container}>
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia className={classes.media}>
								<BookIcon fontSize="large"></BookIcon>
							</CardMedia>
						</CardActionArea>
						<CardContent className={classes.content}>
							<Typography variant="h5">
								Notebook Title Here
							</Typography>
						</CardContent>
					</Card>
				</Container> */}
			</div>
		);
	}
}

export default withStyles(styles)(Home);
