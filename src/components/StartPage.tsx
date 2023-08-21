import React, {FC} from "react";
import {Link} from "react-router-dom";

interface PageId {
    setPageId: (pageId: number) => void
}

const StartPage: FC<PageId> = ({setPageId}) => {
  return (
    <div className="start">
       <h1> Vi gifter oss! </h1>
        <h2>Välkommen på bröllop!</h2>

        <p> Vi är otroligt glada att dela med oss av den största dag i våra liv! Med glädje och
        förväntan bjuder vi in dig för att fira vår kärlek när vi gifter oss på
        Hennickehammars Herrgård I Filipstad lördag den 1 juni 2024 kl. 15.30. </p>

        <p> Efter vigseln fortsätter vi med middag och fest (också på Hennickehammars
        herrgård).  </p>

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

        Just det! Kom ihåg att OSA senast 1 December <Link to={"/boende"} onClick={() => setPageId(2)} > här </Link>.
    </div>
  );
};

export default StartPage;
