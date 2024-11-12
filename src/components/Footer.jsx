import React from 'react';
//import './Footer.css'; 

function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <a href="#hero" className="nav-link px-2 text-body-secondary">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#portfolio" className="nav-link px-2 text-body-secondary">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link px-2 text-body-secondary">About</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a>
                </li>
            </ul>
            <p className="text-center text-body-secondary">© {year} Xingting Peng. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
