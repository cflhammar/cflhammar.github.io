import React, {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Box, Container} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CountDown from "../CountDown";

interface PageId {
    setPageId: (pageId: number) => void
}

const StartPage: FC<PageId> = ({setPageId}) => {

    return (
        <Container>
            <Box>
                <h1> Vi gifter oss om: </h1>
                <CountDown />
                <h1>Varmt välkommen på vårt bröllop!</h1>

                <p>
                    Vi hoppas att vi ses på Hennickehammars Herrgård i Filipstad
                    <span className="bold-text"> lördag den 1 juni 2024. </span>
                </p>

                <p>
                    Dagen börjar med vigsel kl. 15.00 och följs av middag och fest! Vi hoppas
                    därefter att så många som möjligt vill och har möjlighet att sova över på
                    Hennickehammars herrgård tillsammans med oss och avsluta med gemensam
                    frukost på söndag.
                </p>

                <p> Läs mer om hur du bokar boende under fliken
                    <Link to={"/boende"} onClick={() => setPageId(2)} style={{textDecoration: "none"}}> <span className="bold-text">“OSA & boende”</span>.</Link></p>
<br/>
                <p>
                    Vi hoppas att du hittar all information du behöver inför
                    bröllopet här, men om frågor kvarstår är du alltid välkommen att höra av dig!
                </p>

               <p>
                   Vi ser fram emot att fira tillsammans den 1 juni!
               </p>

                <br/>

               <p>
                   <span className="bold-text">PUSS OCH KRAM</span>
               </p>

               <p> <FavoriteIcon /> </p>
                <p>
                    Sofia & Fredrik
                </p>

            </Box>
        </Container>
    );
};

export default StartPage;
