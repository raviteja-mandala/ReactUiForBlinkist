import React from 'react'
import './HeaderButton.css';

function HeaderButton(props) {
    return (
        <div className="hButtonDiv">
            <a href="#" className="hButton">{props.children}</a>
        </div>
    )
}

export default HeaderButton
