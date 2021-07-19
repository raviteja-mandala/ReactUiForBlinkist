// import logo from './logo.svg';
import { Box } from '@material-ui/core';
import React from 'react';
import './App.css';
import BlinkistHeader from './stories/components/molecules/BlinkistHeader';
import { makeStyles } from '@material-ui/core';
import BooksWithStatus from './stories/components/organisms/BooksWithStatus';
import FirstComponent from './FirstComponent';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Highlights from './AddBook';
import MyAccount from './MyAccount';
import ExploreBooks from './stories/components/organisms/ExploreBooks';
import BooksContext from './stories/components/organisms/BooksContext';
import useBooksAxios from './stories/components/organisms/useBooksAxios';
import AddBook from './AddBook';
import { useReducer } from 'react';

const useStyles = makeStyles((theme) => ({
  secondSection  : {
    display : 'flex',
    alignItems: 'center',
    marginLeft: '20px',
    fontSize: '40px',
    height : 150,
    fontWeight: 600,
    flexShrink : 0,
    border : '1px solid lightgrey'
  },

App1 : { 
  display: 'flex',
  height : '100%',
  flexDirection: 'column'
}
}));

function App() {
  const classes = useStyles();
  const url = 'http://localhost:3000/userBooks';
  const [bookArray, setBookArray, error, loading] = useBooksAxios(url,'get'); 
  
  return (
    
    <Box className={classes.App1}>
      
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <BrowserRouter>
        <Box><BlinkistHeader></BlinkistHeader></Box>
        <Switch>          
          <Route exact path="/addBook"> 
          <AddBook/>           
          </Route>
          <Route exact path="/myaccount"> 
          <MyAccount/>            
          </Route>
          {/* <Route exact path="/explore"> 
          <ExploreBooks/>            
          </Route> */}
          <Route exact path="/explore/:category"> 
          <Box className={classes.secondSection}>All Books</Box>
          <ExploreBooks data={bookArray}></ExploreBooks>            
          </Route>
          <Route path="/">
          <Box className={classes.secondSection}>My Library</Box>
          <BooksWithStatus/>
          </Route>
        </Switch>
        </BrowserRouter>
        
        

        {/* <div className="blinkistbody">
          <div className="statusButtonsContainer">
          <BookStatusButton buttonStyles="bookStatusButtonStyle" buttonContainerStyles="containerButtonStyle">Currently Reading</BookStatusButton>
          <BookStatusButton buttonStyles="bookStatusButtonActive" buttonContainerStyles="containerButtonStyleActive">Finished</BookStatusButton></div>
          <BookCard bookTitle="Building an inclusive organization" bookAuthor="Stephen Frost, Raafi-Karim.." 
        min="15" reads="17.5k"></BookCard></div>  */}


       
        {/* </header> */}
    </Box>
  );
}

export default App;
