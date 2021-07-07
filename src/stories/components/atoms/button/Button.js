import React from "react";


export const MyButton = ({color})=> {
    //const {color, children} = props;
    return (
            <button style={{backgroundColor : `${color}`}} >abcbutton</button>
    );
};

MyButton.defaultProps = {
    color: null,
   
  };