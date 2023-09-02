import React, {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import {Button} from "@material-ui/core";
import {Container} from "@mui/material";
import flower from "./flower.png";
import SofImage from "../SofImage/SofImage";

interface PageIdInterface {
    pageId: number
    setPageId: (pageId: number) => void
}

const buttonStyle = {
    fontFamily: "Amatic SC",
    fontSize:"x-large",
    fontWeight:"bolder",

}

const Header: FC<PageIdInterface> = ({pageId, setPageId}) => {

    const onClick = (pageId: number) => {
        setPageId(pageId)
    }



    return (
        <div className="header">
            <div className="wrapper">
                <div className="header-top">
                    <SofImage/>
                    <div className="headertext">
                        <div className="headertext2">
                            <h1>Sofia </h1>
                            <h1> & </h1>
                            <h1>Fredrik</h1>
                            <p>1 juni 2024</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="navBar">
                <div className={pageId == 0 ? "selected" : "unselected"} >
                    <Link to="/">
                        <Button onClick={() => onClick(0)} variant="text" style={buttonStyle}>Start</Button>
                    </Link>
                </div>
                <div className={pageId == 1 ? "selected" : "unselected"}>
                    <Link to="/program">
                        <Button onClick={() => onClick(1)} variant="text" style={buttonStyle}>Program</Button>
                    </Link>
                </div>
                <div className={pageId == 2 ? "selected" : "unselected"}>
                    <Link to="/boende">
                        <Button onClick={() => onClick(2)} variant="text" style={buttonStyle}>OSA & Boende</Button>
                    </Link>
                </div>
                <div className={pageId == 3 ? "selected" : "unselected"}>
                    <Link to="/ovrig-info">
                        <Button onClick={() => onClick(3)} variant="text" style={buttonStyle}>Övrig info</Button>
                    </Link>
                </div>
                <div className={pageId == 4 ? "selected" : "unselected"}>
                    <Link to="/filipstad">
                        <Button onClick={() => onClick(4)} variant="text" style={buttonStyle}>Filipstad</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;