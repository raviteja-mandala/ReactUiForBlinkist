import React from "react";
  
// importing the custom hook
import useCustomHook from "./useCustomHook";
import useWindowWidth from "./useWindowWidth";
  
function FirstComponent(props){
  
    // ClickedButton = resetCounter;
    // alert(1);
    // const clickedButton = useCustomHook(0 , "FirstComponent"); 
    // alert(2);
    alert(21);
    const onSmallScreen = useWindowWidth();
    alert(22);
    return (
        <div>
            <h1> This is the First Component</h1>
            {/* <button onClick={clickedButton}> 
                  Click here!
            </button> */}
            HI ${onSmallScreen}
        </div>
    );
    alert(23);
}
  
export default FirstComponent;

