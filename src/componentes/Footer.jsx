import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
// react icons
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <ul className="social-links">
                    <li>
                        <a href="https://www.linkedin.com/company/morph-analytics" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </li>
                </ul>
                <p>&copy; {new Date().getFullYear()} Morph Analitycs | 2025 All rights reserved.</p>
            </div>
        </footer>
    );
    }

export default Footer;