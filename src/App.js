// import logo from './logo.svg';
import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddBook from "./AddBook";
import "./App.css";
import MyAccount from "./MyAccount";
import BlinkistHeader from "./stories/components/molecules/BlinkistHeader";
import BooksWithStatus from "./stories/components/organisms/BooksWithStatus";
import ExploreBooks from "./stories/components/organisms/ExploreBooks";
import useBooksAxios from "./stories/components/organisms/useBooksAxios";

const useStyles = makeStyles((theme) => ({
  secondSection: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    fontSize: "40px",
    height: 150,
    fontWeight: 600,
    flexShrink: 0,
    border: "1px solid lightgrey"
  },

  App1: {
    display: "flex",
    height: "100%",
    flexDirection: "column"
  }
}));

function App() {
  const classes = useStyles();
  const url = "http://localhost:3000/userBooks";
  const [bookArray, setBookArray, error, loading] = useBooksAxios(url, "get");

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
        <Box>
          <BlinkistHeader></BlinkistHeader>
        </Box>
        <Switch>
          <Route exact path="/addBook">
            <AddBook />
          </Route>
          <Route exact path="/myaccount">
            <MyAccount />
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
            <BooksWithStatus />
          </Route>
        </Switch>
      </BrowserRouter>
    </Box>
  );
}

export default App;
