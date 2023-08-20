import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Button } from "@material-ui/core";

const Footer = () => {
    return (
        <div className="footer">
            <div className="image">
                <img src="./ring.png"  alt="bild på brudparet"/>
            </div>
            <div className="image">
                <img src="./ring.png" alt="bild på brudparet" />
            </div>
            <div className="image">
                <img src="./ring.png" alt="bild på brudparet"/>
            </div>

        </div>
    );
};

export default Footer;