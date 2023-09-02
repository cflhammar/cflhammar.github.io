import React from "react";
import {Box, Container} from "@mui/material";
import hh from "./hh.jpg";

const StartPage = () => {
    return (
        <Container>
            <Box>
                <div className="start">
                    <h1>Hennickehammars Herrgård</h1>
                    <p> Bröllopet äger rum på Hennicke Hammars Herrgård utanför Filipstad.</p>

                    <p> Läs gärna mer om Hennickehammar här: XXX</p>

                    <p> Från lördag till söndag kommer vi att ha herrgården för oss själva och när festen lider</p>
                    mot sitt slut kan alla bege sig till ega hotellrum, för att sedan avsluta med gemensam
                    frukost på söndag morgon/förmiddag. Vi hoppas att du tycker att det låter lika härligt
                    som vi!

                    <h2>Boka rum</h2>
                    <p> Hur du bokar ett hotellrum: </p>

                    <p> Du fyller i nedan google-form och swishar summa till Fredrik på XXXX (förslagsvis görs</p>
                    detta i samband med OSA!)

                    <p> Länk till google forms: XXX</p>

                    <p> Följande rum finns att välja på:</p>

                    <p> Enkelrum: XXX SEK</p>

                    <p> Dubbelrum: XXX SEK</p>

                    <p> I alla rum ingår XXX</p>

                    <p> Rummen finns tillgängliga från kl. XX lördag 1 juni. Nycklar till rummen hämtas upp i</p>
                    receptionen.

                    <p> Utcheckning är kl. XX söndag 2 juni.</p>
                    <img src={hh} alt="hennickehammars herrgård" style={{width:"75%", paddingTop: "10px"}}/>

                </div>
            </Box>
        </Container>
    );
};

export default StartPage;
