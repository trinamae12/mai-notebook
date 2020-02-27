import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const useStyles = {
    menuButton: {
        marginLeft: 'auto'
    }
};

class Home extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div>
                <AppBar 
                    style={{background: '#1976d2'}} 
                    position="static">
                    <ToolBar>
                        <Typography variant="h6">
                            Mai-Notebook
                        </Typography>
                        <Button className={classes.menuButton} color="inherit">Add Notebook</Button>
                    </ToolBar>
                </AppBar>
                
            </div>
        );
    }
}

export default withStyles(useStyles)(Home);