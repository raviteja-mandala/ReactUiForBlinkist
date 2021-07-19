import React from 'react'
import './HeaderButton.css';
import { Link } from 'react-router-dom';

function HeaderButton(props) {

    const handleCloseLink = () => {
        props.onlinkclick(!props.state);
    }
    return (
        <div className="hButtonDiv">
            <Link to={props.tolink} onClick={handleCloseLink} className="hButton">{props.children}</Link>
        </div>
    )
}

export default HeaderButton
