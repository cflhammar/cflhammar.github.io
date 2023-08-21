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
                <div className={ pageId == 0 ? "selected" : "unselected"}>
                    <Link to="/" >
                        <Button onClick={() => onClick(0)} variant="text">Start</Button>
                    </Link>
                </div>
                <div className={ pageId == 1 ? "selected" : "unselected"}>
                    <Link to="/program" >
                        <Button onClick={() => onClick(1)} variant="text">Program</Button>
                    </Link>
                </div>
                <div className={ pageId == 2 ? "selected" : "unselected"}>
                    <Link to="/boende" >
                        <Button onClick={() => onClick(2)} variant="text">Boende</Button>
                    </Link>
                </div>
                <div className={ pageId == 3 ? "selected" : "unselected"}>
                    <Link to="/ovrig-info" >
                        <Button onClick={() => onClick(3)} variant="text">Övrig info</Button>
                    </Link>
                </div>
                <div className={ pageId == 4 ? "selected" : "unselected"}>
                    <Link to="/filipstad" >
                        <Button onClick={() => onClick(4)} variant="text">Filipstad</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;