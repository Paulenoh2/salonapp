import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import './HeaderLogo.css';

const HeaderLogo = () => {
    return (
        <header className="header">
            <div className="header-content">
                <a href="/contact" className="appointment-link">BOOK APPOINTMENT</a>
                <div className="header-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={30} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default HeaderLogo;
