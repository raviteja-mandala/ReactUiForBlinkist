import React, {useState , useEffect} from 'react'
import './BookCard.css'
import { BiTime } from "react-icons/bi";
import { GrUserManager } from  "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import App from '../../../App';
//import bi from '../../../../images/book_image.png';

const useStyles = (props) => makeStyles((theme) => ({
    cardContainer: {
        height : '400px',
        width : '250px' 
  },

  cardContainerFirstChild: {
  backgroundImage: 'url('+images[`${props.book.image}`].default+')',//${props.book.location}
  backgroundRepeat : 'no-repeat',
  backgroundSize : '100% 100%',
  height : '60%',
  width : '100%'
  },

  bookAuthor : {
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    fontSize: 14,
    marginLeft : 8,
    marginRight : 8,
    height : '20px',
    verticalAlign : 'top',
  },

  bookTitle : {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop : 5,
    marginLeft : 8,
    marginRight : 8,
    height : '35px',
    /* border : 1px solid tomato; */
},
timer: {
    fontSize : theme.typography.fontSize.cardIconsFont,
    verticalAlign: 'middle',    
},
mins: {
    position : 'relative',
    height : '100px',
    fontSize : 13,
    paddingLeft : 5
},

  cardContainerSecondChild: {
      height : '40%',
      width : '100%',
      backgroundColor : 'lightgrey'
  },

  threeDots : {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize : 20,
},

reads: {
    position : 'relative',
    height : '100px',
    fontSize : theme.typography.fontSize.reads,
    textAlign : 'right',
    paddingRight : 15
},

  
}));


function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  alert(images);
  console.log(images);
	return images
}

const images = importAll(require.context('../../../../images', false, /\.(png|jpe?g|svg)$/));


const  BookCard = (props) =>  {

    const classes = useStyles(props)();

    const [status, setStatus] = useState(()=>{return 'finished'});

    var changeStatus = () => {
        setStatus((prevStatus) => {
            if(prevStatus === 'currentReading'){
                alert('status changed to finished.');
                return 'finished';
            }
            else{
                alert('status changed to currently reading.');
                return 'currentReading';
            }
        })
    }

    var changeStatusOfBook = (a, b) => {
        // if(b.status === 'currentlyReading'){
        //     alert('123');
        //     b.status = 'finished';
        // } else{
        //     alert('678');
        //     b.status = 'currentlyReading';
        // }
        a(b);
    }

    useEffect(() => {
        console.log("present status is "+status);
    })



    return (
        <Grid container className={classes.cardContainer}>
            <Grid item className={classes.cardContainerFirstChild}>
                { <Button onClick = {() => changeStatusOfBook(props.onchangestate, props.book)} color="primary">ChangeStatus</Button>  }
            </Grid>
            <Grid  item container direction="column" spacing={0} className={classes.cardContainerSecondChild}>                
                <Grid item  className={classes.bookTitle}>{props.book.bookTitle}</Grid>
                <Grid item  className={classes.bookAuthor}>{props.book.bookAuthor}</Grid>
                <Grid container item direction="row" alignItems="stretch" justify="space-between" className={classes.otherDetails}>
                    <Grid item xs={6} className={classes.mins}><BiTime className={classes.timer}></BiTime>{props.book.min} min read</Grid>
                    <Grid item xs={6} className={classes.reads}>
                        <GrUserManager className={classes.timer}></GrUserManager>{props.book.reads} reads
                    <BsThreeDots className={classes.threeDots}></BsThreeDots></Grid>
                </Grid>    
        </Grid>
        </Grid>
    )
}

export default BookCard
