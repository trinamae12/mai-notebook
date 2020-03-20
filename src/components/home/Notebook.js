import React, { Component } from "react";
import { Container, CardActionArea } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import BookIcon from "@material-ui/icons/Book";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import styles from "./Home.styles";

class Notebook extends Component {
	render() {
		const { classes, key, name } = this.props;
		return (
			<div id={key}>
				<Container className={classes.container}>
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia className={classes.media}>
								<BookIcon fontSize="large"></BookIcon>
							</CardMedia>
						</CardActionArea>
						<CardContent className={classes.content}>
							<Typography variant="h5">{name}</Typography>
						</CardContent>
					</Card>
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(Notebook);
