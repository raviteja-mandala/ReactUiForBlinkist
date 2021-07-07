import { Grid } from '@material-ui/core';
import React, {useState} from 'react'
import '../../../App.css';
import BookStatusButton from '../atoms/BookStatusButton/BookStatusButton';
import BookCard from '../molecules/BookCard';
import './BooksWithStatus.css'
import { makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
      marginTop : 10 ,
      flex : 1,
  },
  blinkistbody: {
    flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

}));

function BooksWithStatus() {


    const classes = useStyles();
    const [bookStatus, setBookStatus] = useState(()=>{return 'currentlyReading'});
    var bookList = [{bookTitle : 'Heat Transfer', bookAuthor : 'Hari', min : 20,reads : '0.7k',status : 'currentlyReading'},
{bookTitle : 'Thermodynamics', bookAuthor : 'Vijay', min : 37,reads : '2.3k', status : 'currentlyReading'},
{bookTitle : 'Fluid Mechanics', bookAuthor : 'Rohan', min : 42,reads : '1.2k',status : 'currentlyReading'},
{bookTitle : 'Mass Transfer', bookAuthor : 'Anand', min : 121,reads : '3.8k',status : 'finished'},
{bookTitle : 'Process Dynamics', bookAuthor : 'Prashant', min : 20,reads : '0.7k', status : 'finished'}];

    const [bookArray, setBookArray] = useState(() => {
        console.log('h22');
        return bookList;
    });
    

var statusButtonClick = (messageFromChildButton) => {
    setBookStatus(messageFromChildButton);
}

var changeBookStatus = (bk) => {
    for(let i=0; i<bookArray.length;i++){
        if(bookArray[i].bookTitle === bk.bookTitle){
            
            if(bookArray[i].status === 'currentlyReading'){
                bookArray[i].status = 'finished';
            }else{
                bookArray[i].status = 'currentlyReading';
            }
            break;
        }
    }
    setBookArray([...bookArray]);
}

    return (
        <Box className={classes.blinkistbody}>
          <Grid container>
          <BookStatusButton buttonStyles={ bookStatus === 'currentlyReading' ? 'bookStatusButtonActive' : 'bookStatusButtonStyle'} 
          buttonContainerStyles={ bookStatus === 'currentlyReading' ? 'gridItemContainerForActiveButton' : 'gridItemContainerForInactiveButton'}
          clickfunc = {(a) => statusButtonClick(a)} state="currentlyReading"><Typography variant="body1">Currently Reading</Typography></BookStatusButton>
          <BookStatusButton buttonStyles={ bookStatus === 'finished' ? 'bookStatusButtonActive' : 'bookStatusButtonStyle'}
           buttonContainerStyles={ bookStatus === 'finished' ? 'gridItemContainerForActiveButton' : 'gridItemContainerForInactiveButton'}
           clickfunc = {(a) => statusButtonClick(a)} state="finished"><Typography variant="body1">Finished</Typography></BookStatusButton>
          </Grid>
          <Grid container className={classes.container}>
              {bookArray.map((book) => {
                //   alert(book.bookTitle+" "+book.status);
                  if(book.status === bookStatus){
                      return <Grid item xs={4}><BookCard book={book} onchangestate = { (bk) => {changeBookStatus(bk)}} ></BookCard></Grid> 
                  }
              })}
          </Grid>            
        </Box>
    )
}

export default BooksWithStatus