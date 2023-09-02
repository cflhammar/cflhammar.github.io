import React, {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Box, Container} from "@mui/material";

import sof1 from "./sof1.jpeg";
import sof2 from "./sof2.jpeg";
import sof3 from "./sof3.jpeg";
import sof4 from "./sof4.jpeg";
import sof5 from "./sof5.jpeg";

interface PageId {
    setPageId: (pageId: number) => void
}

const StartPage: FC<PageId> = ({setPageId}) => {
const [imageNumber, setImageNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let next = (imageNumber + 1 ) % images.length;
            setImageNumber(next);
        }, 1000)

        return () => {
            clearInterval(interval);
        };
    }, [imageNumber]);


    const images = [sof1, sof2, sof3, sof4, sof5];
    const getNextImage = () : string => {
      //  let r = Math.floor(Math.random() * images.length - 1) + 1 ;
        console.log(imageNumber);
        return images[imageNumber];
    }


    return (
        <Container>
            <Box>
                <img src={getNextImage()} style={{width: "40%", height: "100%" }}/>
                <h1> Vi ska gifta oss! </h1>
                <h2>Varmt välkommen på vårt bröllop!</h2>

                <p> Vi är otroligt glada att dela med oss av den största dag i våra liv! Med glädje och
                    förväntan bjuder vi in dig för att fira vår kärlek när vi gifter oss på
                    Hennickehammars Herrgård I Filipstad lördag den 1 juni 2024 kl. 15.00. </p>

                <p> Efter vigseln fortsätter vi med middag och fest (också på Hennickehammars
                    herrgård). </p>

                <p> Vi hoppas även att så många som möjligt vill och har möjlighet att sova över på
                    Hennickehammars herrgård tillsammans med oss och avsluta med gemensam
                    frukost på söndag. Läs mer om detta under fliken “boende”. </p>

                <p>
                    Vi hoppas att du på dessa sidor ska hitta all matnyttig information du kan behöva
                    inför bröllopet, men om frågor kvarstår är du såklart alltid välkommen att höra av
                    dig till oss! </p>

                <p> Ser fram emot att ses den 1 juni! </p>

                <p> PUSS OCH KRAM </p>
                <p> Sofia & Fredrik </p>

                Just det! Kom ihåg att OSA senast 1 December <Link to={"/boende"} onClick={() => setPageId(2)}> här </Link>.
            </Box>
        </Container>
    );
};

export default StartPage;
