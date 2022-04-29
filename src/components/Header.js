import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <p>Contact App</p>
            <NavLink style={{ textDecoration: 'none', color: 'white', fontSize: 28 }} to={'/login'}>
                Enter
            </NavLink>
        </header>
    );
};

export default Header;