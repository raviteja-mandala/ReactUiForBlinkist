import React from 'react';
import { Button , Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import './BookStatusButton.css';
import BooksWithStatus from '../../organisms/BooksWithStatus';
import { BorderColor } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    gridItemContainerForInactiveButton: {
        borderColor : 'black' 
  },
  gridItemContainerForActiveButton : {
    borderColor: 'green'
  }

}));

function BookStatusButton(props) {

    const classes = useStyles();

    var changeStatus = () => {
       props.clickfunc(props.state);
    }

    return (
        <Grid item xs={4}>
            <Box borderBottom={2} className={props.buttonContainerStyles === 'gridItemContainerForInactiveButton' ? classes.gridItemContainerForInactiveButton : classes.gridItemContainerForActiveButton}>
            <button className = {props.buttonStyles} onClick = {() => changeStatus() }>{props.children}</button>   </Box>         
        </Grid>
    )
}

export default BookStatusButton
