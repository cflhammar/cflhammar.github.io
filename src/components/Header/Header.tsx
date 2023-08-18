import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "@material-ui/core";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <h1>Sofia & Fredrik</h1>
            </Link>
            <div className="navBar">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button variant="text">Start</Button>
                </Link>
                <Link to="/program" style={{ textDecoration: "none" }}>
                    <Button variant="text">Program</Button>
                </Link>
                <Link to="/boende" style={{ textDecoration: "none" }}>
                    <Button variant="text">Boende</Button>
                </Link>
                <Link to="/ovrig-info" style={{ textDecoration: "none" }}>
                    <Button variant="text">Övrig information</Button>
                </Link>
                <Link to="/filipstad" style={{ textDecoration: "none" }}>
                    <Button variant="text">Filipstad</Button>
                </Link>

            </div>
        </div>
    );
};

export default Header;