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
    borderColor: theme.palette.primary.main
  },

  bookStatusButtonActive : {

    color : theme.palette.primary.main,
    border : 'none',
    backgroundColor: theme.bookStatusButtonColor.main,
    marginTop : '5px',
    marginBottom: '15px',
    fontSize : theme.typography.fontSize.bookStatusFontSize,
    fontWeight: 500
  },

  bookStatusButtonStyle : {

    border : 'none',
    paddingLeft: '0px',
    backgroundColor: theme.bookStatusButtonColor.main,
    marginTop : '5px',
    marginBottom: '15px',
    fontSize : theme.typography.fontSize.bookStatusFontSize,
    fontWeight: 500
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
            <button className = {props.buttonStyles} onClick = {() => changeStatus()}>{props.children}</button>   </Box>         
        </Grid>
    )
}

export default BookStatusButton
