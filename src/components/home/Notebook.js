import React, { Component } from "react";
import {
	CardActionArea,
	Grid,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";
import BookIcon from "@material-ui/icons/Book";
import { withStyles } from "@material-ui/core/styles";

import styles from "./Home.styles";

class Notebook extends Component {
	render() {
		const { classes, key, name } = this.props;
		return (
			<>
				<Grid item xs={3}>
					<Card className={classes.card} id={key}>
						<CardActionArea>
							<CardMedia className={classes.media}>
								<BookIcon fontSize="large"></BookIcon>
							</CardMedia>
						</CardActionArea>
						<CardContent className={classes.content}>
							<Typography variant="h5">{name}</Typography>
						</CardContent>
					</Card>
				</Grid>
			</>
		);
	}
}

export default withStyles(styles)(Notebook);
