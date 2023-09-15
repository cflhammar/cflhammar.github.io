import React from "react";

const Info = () => {
    return (
        <div className="start">

            <h2> TOASTMADAMES </h2>

            <p> Våra underbara vänner Sara Lidberg och Frida Gillsbro är toastmadames och kommer att hålla i taktpinnen
                under
                kvällens festligheter!
            </p>

            <p>
                Om du (ensam eller tillsammans med några andra) önskar hålla tal eller bjuda på annan underhållning
                under middagen, kontakta Sara eller Frida senast 1 maj 2024 på:
                <br/>
                <span className="bold-text" onClick={(e) => {window.location.href ='mailto:sofiaochfredrik2024@gmail.com';}}>sofiaochfredrik2024@gmail.com </span>
            </p>


            <h2> KLÄDSEL </h2>

            <p>
                Klädkoden är <span className="bold-text"> mörk kostym</span> men det viktigaste är att du känner dig fin!
            </p>
            <p>
                Vigseln är planerad att hållas utomhus och på gräs. Håll tummarna att vädergudarna är med oss och ett tips
                är att lämna stilettklackarna i garderoben.
            </p>

            <h2> PRESENTER </h2>

            <p>
                Den viktigaste och finaste presenten du kan ge oss är att du är med och firar vår dag!
              </p>
            <p>
                Om du ändå vill uppmärksamma vår dag med en gåva uppskattar vi ett bidrag till vår bröllopsresa via våra toastmadames.

            </p>

            <h2> BARN </h2>

            <p>
                Barn är underbara, men denna dag är vi tacksamma om ni ordnar med barnpassning.
                Ammande barn är givetvis välkomna.
            </p>

        </div>
    );
};

export default Info;
