import React, {FC, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Button } from "@material-ui/core";

interface PageIdInterface {
    pageId: number
}

const Footer: FC<PageIdInterface> = ({pageId}) => {
    const firstImage : string[] = ['./ring.png', './logo192.png', './ring.png', './logo192.png', './ring.png']
    const secondImage : string[] = ['./ring.png', './logo192.png', './ring.png', './logo192.png', './ring.png']
    const thirdImage : string[] = ['./ring.png', './logo192.png', './ring.png', './logo192.png', './ring.png']

    return (
        <div className="footer">
            <div className="image">
                <img src={firstImage[pageId]}  alt="bild på brudparet"/>
            </div>
            <div className="image">
                <img src={secondImage[pageId]} alt="bild på brudparet" />
            </div>
            <div className="image">
                <img src={thirdImage[pageId]} alt="bild på brudparet"/>
            </div>

        </div>
    );
};

export default Footer;