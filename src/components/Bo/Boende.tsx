import React from "react";
import {Box, Container} from "@mui/material";
import hh from "./hh.jpg";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight} from "@mui/icons-material";

const StartPage = () => {
    return (
        <Container>
            <Box>
                <div className="start">
                    <h2>Hennickehammars herrgård</h2>
                    <p>
                        Bröllopet äger rum på Hennickehammars Herrgård utanför Filipstad.
                    </p>

                    <p>
                        Från lördag till söndag kommer vi att ha herrgården för oss själva och när festen lider
                        mot sitt slut kan alla bege sig till egna hotellrum, för att sedan avsluta med gemensam
                        frukost på söndag morgon/förmiddag. Vi hoppas att du tycker att det låter lika härligt
                        som vi!
                    </p>

                    <h2>osa och boka rum</h2>

                    <p>
                        OSA och boka rum genom att fylla i nedan formulär:
                    </p>

                    <div >
                        <a target='_blank'
                           rel='noopener noreferrer' href="https://www.google.se">
                            <Button variant="outlined" startIcon={<KeyboardDoubleArrowRight />} endIcon={<KeyboardDoubleArrowLeft />}  >
                                OSA och boka boende här
                            </Button>
                        </a>
                    </div>

                    <p>
                        Följande rum finns att välja på:
                    </p>

                    <p>
                        Dubbelrum: 1500 :-
                        <br/>
                        Enkelrum 900 :-
                    </p>

                    <p>
                        Rummen finns tillgängliga från kl. 13.30 lördag 1 juni. Nyckel hämtas upp
                        i receptionen.
                    </p>
                    <p>
                        Utcheckning sker senast kl. 11.00 söndag 2 juni.
                    </p>

                    <p>
                        Läs gärna mer om Hennickehammar här: &nbsp;
                        <a target='_blank'
                           rel='noopener noreferrer' href="https://hennickehammar.se/">
                            https://hennickehammar.se/
                        </a>
                    </p>

                    <img src={hh} alt="hennickehammars herrgård" style={{width: "75%", paddingTop: "10px"}}/>

                </div>
            </Box>
        </Container>
    );
};

export default StartPage;
