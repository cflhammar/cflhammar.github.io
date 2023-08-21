import React, {FC, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "@material-ui/core";

interface PageIdInterface {
    pageId: number
    setPageId: (pageId: number) => void
}

const Header : FC<PageIdInterface> = ({pageId, setPageId}) => {

    const onClick = (pageId: number) => {
        setPageId(pageId)
    }

    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <h1>Sofia & Fredrik</h1>
            </Link>
            <div className="navBar">
                <Link to="/" style={ pageId != 0 ? {  textDecoration: "none" } : {}}>
                    <Button onClick={() => onClick(0)} variant="text">Start</Button>
                </Link>
                <Link to="/program" style={ pageId != 1 ? {  textDecoration: "none" } : {}}>
                    <Button onClick={() => onClick(1)} variant="text">Program</Button>
                </Link>
                <Link to="/boende" style={ pageId != 2 ? {  textDecoration: "none" } : {}}>
                    <Button onClick={() => onClick(2)} variant="text">Boende</Button>
                </Link>
                <Link to="/ovrig-info" style={ pageId != 3 ? {  textDecoration: "none" } : {}}>
                    <Button onClick={() => onClick(3)} variant="text">Övrig information</Button>
                </Link>
                <Link to="/filipstad" style={ pageId != 4 ? {  textDecoration: "none" } : {}}>
                    <Button onClick={() => onClick(4)} variant="text">Filipstad</Button>
                </Link>

            </div>
        </div>
    );
};

export default Header;