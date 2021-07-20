import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "../../../App.css";
import BookStatusButton from "../atoms/BookStatusButton/BookStatusButton";
import BookCard from "../molecules/BookCard";
import "./BooksWithStatus.css";
import useBooksAxios from "./useBooksAxios";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10,
    flex: 1
  },
  blinkistbody: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  }
}));

function BooksWithStatus() {
  const classes = useStyles();
  const [bookStatus, setBookStatus] = useState(() => {
    return "currentlyReading";
  });
  const url = "http://localhost:3000/userBooks";
  const [bookArray, setBookArray, error, loading] = useBooksAxios(url, "get");

  const statusButtonClick = (messageFromChildButton) => {
    setBookStatus(messageFromChildButton);
  };

  const removeFromLibrary = (bk) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };
    fetch("http://localhost:3000/userBooks/" + bk.id, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setBookArray([...bookArray.filter((item) => item.id !== bk.id)]);
      });
  };

  const changeBookStatus = (bk) => {
    let updatedStatus = bk[status];
    for (let i = 0; i < bookArray.length; i++) {
      if (bookArray[i].id === bk.id) {
        if (bookArray[i].status === "currentlyReading") {
          bookArray[i].status = "finished";
          updatedStatus = "finished";
        } else {
          bookArray[i].status = "currentlyReading";
          updatedStatus = "currentlyReading";
        }
        break;
      }
    }
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: updatedStatus })
    };
    fetch("http://localhost:3000/userBooks/" + bk.id, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setBookArray([...bookArray]);
      });
  };

  return loading ? (
    <p>loading...</p>
  ) : bookArray !== null ? (
    <Box className={classes.blinkistbody}>
      <Grid container>
        <BookStatusButton
          buttonStyles={
            bookStatus === "currentlyReading"
              ? "bookStatusButtonActive"
              : "bookStatusButtonStyle"
          }
          buttonContainerStyles={
            bookStatus === "currentlyReading"
              ? "gridItemContainerForActiveButton"
              : "gridItemContainerForInactiveButton"
          }
          clickfunc={(a) => statusButtonClick(a)}
          state="currentlyReading"
        >
          <Typography variant="body1">Currently Reading</Typography>
        </BookStatusButton>
        <BookStatusButton
          buttonStyles={
            bookStatus === "finished"
              ? "bookStatusButtonActive"
              : "bookStatusButtonStyle"
          }
          buttonContainerStyles={
            bookStatus === "finished"
              ? "gridItemContainerForActiveButton"
              : "gridItemContainerForInactiveButton"
          }
          clickfunc={(a) => statusButtonClick(a)}
          state="finished"
        >
          <Typography variant="body1">Finished</Typography>
        </BookStatusButton>
      </Grid>
      <Grid container className={classes.container}>
        {bookArray.map((book) => {
          if (book.status === bookStatus) {
            return (
              <Grid item xs={4}>
                <BookCard
                  book={book}
                  myLibrary={true}
                  onremove={(bk) => {
                    removeFromLibrary(bk);
                  }}
                  onchangestate={(bk) => {
                    changeBookStatus(bk);
                  }}
                ></BookCard>
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  ) : (
    error
  );
}

export default BooksWithStatus;
