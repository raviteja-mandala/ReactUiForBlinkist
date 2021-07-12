import React from 'react'
import './HeaderButton.css';
import { Link } from 'react-router-dom';

function HeaderButton(props) {
    return (
        <div className="hButtonDiv">
            <Link to={props.tolink} className="hButton">{props.children}</Link>
        </div>
    )
}

export default HeaderButton
