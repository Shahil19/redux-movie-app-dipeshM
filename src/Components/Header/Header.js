import React from 'react';
import { Link } from "react-router-dom"
import "./Header.scss"

const Header = () => {
    return (
        <div className='header'>
            <Link to={'/'}>
                <div className="logo">Movie App</div>
            </Link>
            <div className="user-image">
                &#128515;
            </div>
        </div>
    );
};

export default Header;