import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home.component';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        width: 20,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [signedIn, setSignedIn] = useState(false);

    if (signedIn === false) {
        return (
            <AppBar id="navbar" position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit" onClick={() => setSignedIn(true)}>Sign in</Button>
                </Toolbar>
            </AppBar>
        );
    } else {
        return (
            <>
                <AppBar id="navbar" position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            News
                            <Button id="postButton" color="inherit">Posts</Button>
                        </Typography>
                        <Button color="inherit" onClick={() => setSignedIn(false)}>Sign out</Button>
                    </Toolbar>
                </AppBar>
               <Home/>
            </>
        );
    }
}

export default Navbar;