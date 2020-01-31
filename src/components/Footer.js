import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="stickyFooter mt-auto d-flex align-items-center justify-content-center">
            <div className="text-center">
                <p className="mb-0">Game developed by Antonio de las Morenas</p>
                
                <p className="mb-0">for non-commercial portfolio use only.</p>

                <p className="mb-0">Rights for all images go to their respective owners.</p>

                <p className="mb-0">No copyright infringement intended.</p>
            </div>
        </footer>
    );
}

export default Footer;