import React, {FC, useEffect, useState} from "react";
import sof1 from "./sof52.png";
// import sof2 from "../Start/sof2.jpeg";
// import sof3 from "../Start/sof3.jpeg";
// import sof4 from "../Start/sof4.jpeg";
// import sof5 from "../Start/sof5.jpeg";

const SofImage:FC = () => {
    // const [imageNumber, setImageNumber] = useState(0);
    //
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         let next = (imageNumber + 1 ) % images.length;
    //         setImageNumber(next);
    //     }, 1000)
    //
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [imageNumber]);

    //
    // const images = [sof1, sof2, sof3, sof4, sof5];
    // const getNextImage = () : string => {
    //     //  let r = Math.floor(Math.random() * images.length - 1) + 1 ;
    //     console.log(imageNumber);
    //     return images[imageNumber];
    // }

    return (
                <img src={sof1} style={{ width: "20%", height: "auto", margin: "auto", "marginRight": 0, paddingRight:"30px"}}/>
    );
};

export default SofImage;