import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-text">
                <h5>Online shopping</h5>
                <h1>I'm ready! <Link to='/'>Buy Now</Link></h1>
            </div>
            <p id='copy-right'>Fibki.com © 2022 All Rights Reserved</p>
        </footer>
    );
};

export default Footer;