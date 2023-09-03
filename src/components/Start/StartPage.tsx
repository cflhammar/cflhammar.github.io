import React, {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Box, Container} from "@mui/material";
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
                    Dagen påbörjas med vigsel kl. 15.00 och följs av middag och fest! Vi hoppas
                    därefter att så många som möjligt vill och har möjlighet att sova över på
                    Hennickehammars herrgård tillsammans med oss och avsluta med gemensam
                    frukost på söndag.
                </p>

                <p> Läs mer om hur du bokar boende under fliken
                    <Link to={"/boende"} onClick={() => setPageId(2)} style={{textDecoration: "none"}}> <span className="bold-text">“OSA & boende”</span>.</Link></p>

                <p>
                    Vi hoppas att du på denna hemsida ska hitta all information du kan behöva inför
                    bröllopet, men om frågor kvarstår är du såklart alltid välkommen att höra av dig till
                    oss!
                </p>

               <p>
                   Vi längtar tills den 1 juni!
               </p>

               <p>
                   Just det! Kom ihåg att OSA senast 1 januari!
               </p>
                <br/>

               <p>
                   <span className="bold-text">PUSS OCH KRAM</span>
               </p>

                <p>
                    Sofia & Fredrik
                </p>

            </Box>
        </Container>
    );
};

export default StartPage;
