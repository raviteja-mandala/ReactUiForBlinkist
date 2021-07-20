import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import HeaderButton from "../atoms/button/HeaderButton";
import SimpleHeaderButton from "../atoms/button/SimpleHeaderButton";
import ExploreDialog from "../organisms/ExploreDialog";
import SearchBox from "../organisms/SearchBox";
import "./BlinkistHeader.css";
import blinkistHeaderIcon from "./blinkist_icon.png";

const useStyles = makeStyles((theme) => ({
  hideIcon: {
    display: "none"
  },
  showIcon: {
    display: "visible"
  },
  expandLess: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  bHeader: {
    display: "flex",
    height: 60,
    flexShrink: 0
  },

  push: {
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },

  bigFontForHeader: {
    fontSize: "40px",
    fontWeight: 700,
    display: "inline-block",
    marginBottom: "8px"
  },

  searchBox: {
    position: "fixed",
    width: "300px",
    top: 10,
    left: 550,
    display: "none",
    backgroundColor: "#ffffff",
    zIndex: 3
  },

  overlay: {
    position: "fixed",
    display: "none" /* Hidden by default */,
    width: "100%" /* Full width (cover the whole page) */,
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.4,
    backgroundColor: "#808080",
    zIndex: 1,
    cursor: "pointer" /* Add a pointer on hover */
  }
}));

function BlinkistHeader(props) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  // const [bArray , dispatch] = useReducer((state, action) => {
  //     return action.payload;
  //   }, []);
  //   console.log('bArray'+bArray);

  const handleClose = (state) => {
    if (state) {
      document.getElementById("overlay").style.display = "block";
    } else {
      document.getElementById("overlay").style.display = "none";
    }
    if (document.getElementById("sbox")) {
      document.getElementById("sbox").style.display = "none";
    }
    setIsOpen(state);
  };

  const onSearchClick = () => {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("sbox").style.display = "block";
    setIsOpen(false);
  };

  const onSearchClose = () => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("sbox").style.display = "none";
  };

  return (
    <div className={classes.bHeader}>
      <HeaderButton>
        <img src={blinkistHeaderIcon} alt="Blinkist" />
        <span className={classes.bigFontForHeader}>Blinkist</span>
      </HeaderButton>
      <HeaderButton onlinkclick={onSearchClick}>
        <BsSearch></BsSearch>
      </HeaderButton>

      <Box id="sbox" className={classes.searchBox}>
        <SearchBox onsearchclose={onSearchClose}></SearchBox>
      </Box>

      <HeaderButton onlinkclick={handleClose} state={isOpen}>
        Explore
        <MdExpandMore
          className={isOpen === true ? classes.hideIcon : classes.showIcon}
        />
        <MdExpandLess
          className={isOpen === true ? classes.showIcon : classes.hideIcon}
        />
      </HeaderButton>

      <SimpleHeaderButton
        state={isOpen}
        tolink="/mylibrary"
        onlinkclick={handleClose}
      >
        MyLibrary
      </SimpleHeaderButton>
      <SimpleHeaderButton
        tolink="/addBook"
        onlinkclick={handleClose}
        state={isOpen}
      >
        Add Book
      </SimpleHeaderButton>
      <div className={classes.push}>
        <HeaderButton tolink="/myaccount">
          Account
          <MdExpandMore />
        </HeaderButton>
      </div>
      <ExploreDialog open={isOpen} onclose={handleClose}></ExploreDialog>
      <Box
        id="overlay"
        className={classes.overlay}
        onClick={() => {
          handleClose(false);
        }}
      ></Box>
      {/* </BooksContext.Provider> */}
    </div>
  );
}

export default BlinkistHeader;
