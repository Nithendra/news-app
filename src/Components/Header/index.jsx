import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

const Header = () => (
    <div className="header">
        <img alt="logo" src="src/images/braking-news.jpg" />
        <Link className="home-link" to="/">HOME</Link>
        <Link className="contact-link" to="/contact">CONTACT</Link>
        <Link className="contact-link" to="/news">NEWS</Link>
    </div>
);

export default Header;