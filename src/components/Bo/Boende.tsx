import React from "react";
import {Box, Container} from "@mui/material";
import hh from "./hh.jpg";
import {Link} from "react-router-dom";

const StartPage = () => {
    return (
        <Container>
            <Box>
                <div className="start">
                    <p> Bröllopet äger rum på <span className="bold-text"> Hennicke Hammars Herrgård </span> utanför
                        Filipstad.</p>

                    <p>
                        Från lördag till söndag kommer vi att ha herrgården för oss själva och när festen lider
                        mot sitt slut kan alla bege sig till egna hotellrum, för att sedan avsluta med gemensam
                        frukost på söndag morgon/förmiddag. Vi hoppas att du tycker att det låter lika härligt
                        som vi!
                    </p>

                    <h2>OSA och boka rum</h2>

                    <p>
                        Du OSA:r och bokar hotellrum på samma gång genom att fylla i nedan formulär:
                    </p>


                    <a target='_blank'
                       rel='noopener noreferrer' href="https://www.google.se">
                        <button>
                            OSA och boka boende här
                        </button>
                    </a>

                    <p>
                        Följande rum finns att välja på:
                    </p>

                    Dubbelrum: 1500 :-
                    <br/>
                    Enkelrum 900 :-

                    <p>
                        Alla rum ligger vackert belägna i närheten av herrgården och frukostbuffé ingår.
                    </p>

                    <p>
                        Läs gärna mer om Hennickehammar här: &nbsp;
                        <a target='_blank'
                           rel='noopener noreferrer' href="https://hennickehammar.se/">
                            https://hennickehammar.se/
                        </a>
                    </p>

                    <p>
                        Rummen finns tillgängliga från kl. 13.30 lördag 1 juni. Nycklar till rummen hämtas upp
                        i receptionen.
                    </p>
                    <p>
                        Utcheckning är kl. 11.00 söndag 2 juni.
                    </p>

                    <img src={hh} alt="hennickehammars herrgård" style={{width: "75%", paddingTop: "10px"}}/>

                </div>
            </Box>
        </Container>
    );
};

export default StartPage;
