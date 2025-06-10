import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
// react icons
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <ul className="social-links">
                    <li>
                        <a href="https://www.facebook.com/caceresabelanibal" target="_blank" rel="noopener noreferrer">
                            <FaFacebook /> Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter /> Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/caceresabelanibal/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram /> Instagram
                        </a>
                    </li>
                </ul>
                <p>&copy; {new Date().getFullYear()} Morph Analitycs | 2025 All rights reserved.</p>
            </div>
        </footer>
    );
    }

export default Footer;