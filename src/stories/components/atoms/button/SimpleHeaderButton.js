import React from "react";
import "./HeaderButton.css";
import { Link } from "react-router-dom";

function SimpleHeaderButton(props) {
  const handleCloseLink = () => {
    if (props.state) {
      props.onlinkclick(false);
    }
  };
  return (
    <div className="hButtonDiv">
      <Link to={props.tolink} className="hButton" onClick={handleCloseLink}>
        {props.children}
      </Link>
    </div>
  );
}

export default SimpleHeaderButton;
