import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';



const styles = theme => ({
 root: {
   flexGrow: 1,
 },
 grow1: {
    flexGrow: 0.4
  },
  grow2: {
    flexGrow: 0.6
  },
 appBar: {
       background: "transparent",
       boxShadow: "none"
     },
 menuButton: {
   marginLeft: -12,
   marginRight: 20,
 },
 search: {
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: fade(theme.palette.common.white, 0.15),
   '&:hover': {
     backgroundColor: fade(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing.unit * 2,
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
     marginLeft: theme.spacing.unit * 3,
     width: 'auto',
   },
 },
 searchIcon: {
   width: theme.spacing.unit * 9,
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
 },
 inputRoot: {
   color: 'inherit',
   width: '100%',
 },
 inputInput: {
   paddingTop: theme.spacing.unit,
   paddingRight: theme.spacing.unit,
   paddingBottom: theme.spacing.unit,
   paddingLeft: theme.spacing.unit * 10,
   transition: theme.transitions.create('width'),
   width: '100%',
   [theme.breakpoints.up('md')]: {
     width: 200,
   },
 },
});


function SecondarySearchAppBar(props) {
 const { classes, theme } = props;
 return (
   <div className={classes.root}>
     <AppBar position="static" className={classes.appBar}>
       <Toolbar>
           <div className={classes.search}>
             <div className={classes.searchIcon}>
               <SearchIcon />
             </div>
             <InputBase
               placeholder="Search…"
               classes={{
                 root: classes.inputRoot,
                 input: classes.inputInput,
               }}
             />
           </div>
           <div className={classes.grow1} />
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              style={{ textAlign: "center" }}
              noWrap>
              Sublme
            </Typography>
            <div className={classes.grow2} />
         <a href="/login"><Button color="inherit">Login</Button></a>
         <Button color="inherit">Signup</Button>
         
       </Toolbar>
     </AppBar>
   </div>
 );
}

SecondarySearchAppBar.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SecondarySearchAppBar);