import React from 'react'
import HeaderButton from '../atoms/button/HeaderButton'
import './BlinkistHeader.css'
import blinkistHeaderIcon from './blinkist_icon.png'
import { BsSearch } from 'react-icons/bs'
import {MdExpandMore} from 'react-icons/md'
import { BrowserRouter } from 'react-router-dom'

function BlinkistHeader() {
    return (
        <div className="bHeader">
            
            <HeaderButton >
                 <img src={blinkistHeaderIcon} alt="Blinkist"/> 
                <span className="bigFontForHeader">Blinkist</span></HeaderButton>
            <HeaderButton><BsSearch></BsSearch></HeaderButton>
            <HeaderButton>Explore<MdExpandMore/></HeaderButton>
            <HeaderButton tolink="/mylibrary">MyLibrary</HeaderButton>
            <HeaderButton tolink="/highlights">Highlights</HeaderButton>
            <div className="push"><HeaderButton tolink="/myaccount">Account<MdExpandMore/></HeaderButton></div>
        </div>
    )
}

export default BlinkistHeader
