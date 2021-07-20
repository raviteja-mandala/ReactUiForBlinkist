import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BiTime } from "react-icons/bi";
import { GrUserManager } from "react-icons/gr";
import "./BookCard.css";

const useStyles = (props) =>
  makeStyles((theme) => ({
    cardContainer: {
      height: "400px",
      width: "250px",
      marginTop: 10
    },

    buttonContainer: {
      marginTop: 20
    },

    colorButton: {
      color: "white",
      padding: "5px 10px",
      fontSize: "10px",
      width: "60%",
      backgroundColor: "purple",
      borderRadius: 10,
      marginTop: 2,
      display: "block",
      "&:hover": {
        backgroundColor: "green"
      }
    },

    hideButton: {
      display: "none"
    },

    cardContainerFirstChild: {
      backgroundImage: "url(" + images[`${props.book.image}`].default + ")", //${props.book.location}
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      height: "60%",
      width: "100%"
    },

    bookAuthor: {
      fontSize: 14,
      marginLeft: 8,
      marginRight: 8,
      height: "20px",
      verticalAlign: "top"
    },

    bookTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 5,
      marginLeft: 8,
      marginRight: 8,
      height: "35px"
      /* border : 1px solid tomato; */
    },
    timer: {
      fontSize: theme.typography.fontSize.cardIconsFont,
      verticalAlign: "middle"
    },
    mins: {
      fontSize: 13,
      paddingLeft: 5
    },

    cardContainerSecondChild: {
      height: "40%",
      width: "100%",
      backgroundColor: "lightgrey"
    },

    reads: {
      fontSize: theme.typography.fontSize.reads,
      textAlign: "right",
      paddingRight: 15
    }
  }));

function importAll(r) {
  const images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../../../images", false, /\.(png|jpe?g|svg)$/)
);

const BookCard = (props) => {
  const classes = useStyles(props)();

  const [status, setStatus] = useState(() => {
    return "finished";
  });

  const changeStatusOfBook = (a, b) => {
    a(b);
  };

  useEffect(() => {
    console.log("present status is " + status);
  });

  return (
    <Grid container className={classes.cardContainer}>
      <Grid item className={classes.cardContainerFirstChild}></Grid>
      <Grid
        item
        container
        direction="column"
        spacing={0}
        className={classes.cardContainerSecondChild}
      >
        <Grid item className={classes.bookTitle}>
          {props.book.bookTitle}
        </Grid>
        <Grid item className={classes.bookAuthor}>
          {props.book.bookAuthor}
        </Grid>
        <Grid item container direction="row" justify="space-between">
          <Grid item xs={6} className={classes.mins}>
            <BiTime className={classes.timer}></BiTime>
            {props.book.min} min read
          </Grid>
          <Grid item xs={6} className={classes.reads}>
            <GrUserManager className={classes.timer}></GrUserManager>
            {props.book.reads} reads
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={classes.buttonContainer}
        >
          <Button
            id="changeStatus"
            onClick={() => changeStatusOfBook(props.onchangestate, props.book)}
            variant="contained"
            className={
              props.myLibrary === true
                ? classes.colorButton
                : classes.hideButton
            }
          >
            Change status
          </Button>
          <Button
            id="addToLibrary"
            onClick={() => changeStatusOfBook(props.onaddtolibrary, props.book)}
            variant="contained"
            className={
              props.myLibrary === true
                ? classes.hideButton
                : classes.colorButton
            }
          >
            Add to library
          </Button>
          <Button
            id="removeFromLibrary"
            onClick={() => changeStatusOfBook(props.onremove, props.book)}
            variant="contained"
            className={
              props.myLibrary === true
                ? classes.colorButton
                : classes.hideButton
            }
          >
            Remove from library
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BookCard;
