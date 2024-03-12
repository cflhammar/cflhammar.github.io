import React from "react";
import {Box, Container} from "@mui/material";
import hh from "./hh.jpg";
import hh2 from "./hh2.png";
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
                        Bröllopet (vigsel, middag, fest, övernattning och frukost) äger rum på Hennickehammars Herrgård utanför Filipstad.
                    </p>

                    <p>
                        Läs gärna mer om Hennickehammar här: &nbsp;
                        <a target='_blank'
                           rel='noopener noreferrer' href="https://hennickehammar.se/">
                            https://hennickehammar.se/
                        </a>
                    </p>

                    <h2>osa och boka rum</h2>

                    <p>
                        OSA och boka rum genom att fylla i nedan formulär:
                    </p>

                    <div >
                        <a target='_blank'
                           rel='noopener noreferrer' href="https://forms.gle/ZiTc2aYVVFhcVy6M6">
                            <Button variant="outlined" startIcon={<KeyboardDoubleArrowRight />} endIcon={<KeyboardDoubleArrowLeft />}  >
                                OSA OCH BOKA RUM HÄR
                            </Button>
                        </a>
                    </div>

                    <p>
                        Följande rum finns att välja på:
                    </p>

                    <p>
                        Dubbelrum: 1500:- / natt
                        <br/>
                        Enkelrum: 900:- / natt
                    </p>

                    <p>
                        Rummen är tillgängliga från kl. 13.30 lördag 1 juni.
                        Nyckel hämtas upp i receptionen.
                    </p>
                    <p>
                        Utcheckning sker senast kl. 11.00 söndag 2 juni.
                    </p>

                    <img src={hh} alt="hennickehammars herrgård 1" style={{width: "75%", paddingTop: "10px"}}/>
                    <img src={hh2} alt="hennickehammars herrgård 2" style={{width: "75%", paddingTop: "10px"}}/>

                </div>
            </Box>
        </Container>
    );
};

export default StartPage;
