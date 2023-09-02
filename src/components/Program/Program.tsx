import React from "react";
import "./Program.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import WineBarIcon from '@mui/icons-material/WineBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CelebrationIcon from '@mui/icons-material/Celebration';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import {Box, Container, Tab, Tabs, Typography} from "@mui/material";

const Program = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const style = {
        margin: 0,
        padding: "3px",
        fontWeight: "bold",
        fontFamily: "Amatic SC",
        fontSize: "x-large"
    }

    const timestyle = {
        margin: 0,
        padding: "3px",
        fontWeight: "bold",
        fontFamily: "Amatic SC",
        fontSize: "x-large"
    }

    return (
        <Box sx={{width: "100%", paddingTop: "10px"}}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="lördag" style={style}/>
                <Tab label="Söndag" style={style}/>
            </Tabs>
            {value == 0 ?
                <div className="sat">
                    <div className="activity">
                        <FavoriteIcon/>
                        <p style={style}>Vigsel</p>
                        <p style={timestyle}>15:00</p>
                    </div>
                    <div className="activity">
                        <WineBarIcon/>
                        <p style={style}>Mingel & Foto</p>
                        <p style={timestyle}>15:30</p>
                    </div>
                    <div className="activity">
                        <RestaurantIcon/>
                        <p style={style}>Middag</p>
                        <p style={timestyle}>17:30</p>
                    </div>
                    <div className="activity">
                        <CelebrationIcon/>
                        <p style={style}>Fest</p>
                        <p style={timestyle}>22:30</p>
                    </div>
                    <div className="activity">
                        <WbTwilightIcon/>
                        <p style={style}>Efterfest i sjöstugan</p>
                        <p style={timestyle}>02:00</p>
                    </div>
                </div>
                :
                <div className="sun">
                    <div className="activity">
                        <FreeBreakfastIcon/>
                        <p style={style}>Frukost</p>
                        <p style={timestyle}>08.00-11.00</p>
                    </div>
                    <div className="activity">
                        <BusinessCenterIcon/>
                        <p style={style}>Utcheckning och hemfärd</p>
                        <p style={timestyle}>11.00</p>
                    </div>
                </div>}
        </Box>
    );

};


//
//
// return (
//     <Box sx={{width: '100%'}}>
//         <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
//             <Tabs value={value} onChange={handleChange} centered>
//                 <Tab label="Lördag"/>
//                 <Tab label="Söndag"/>
//             </Tabs>
//         </Box>
//         <CustomTabPanel value={value} index={0}>
//             <div className="activity">
//                 <FavoriteIcon/>
//                 <p id="testid">Vigsel</p>
//                 <p id="testid">15:00</p>
//             </div>
//             <div className="activity">
//                 <WineBarIcon/>
//                 <p>Mingel & Foto</p>
//                 <p>15:30</p>
//             </div>
//             <div className="activity">
//                 <RestaurantIcon/>
//                 <p>Middag</p>
//                 <p>17:30</p>
//             </div>
//             <div className="activity">
//                 <CelebrationIcon/>
//                 <p>Fest</p>
//                 <p>22:30</p>
//             </div>
//             <div className="activity">
//                 <WbTwilightIcon/>
//                 <p>Efterfest i sjöstugan</p>
//                 <p>02:00</p>
//             </div>
//         </CustomTabPanel>
//         <CustomTabPanel value={value} index={1}>
//             <div className="activity">
//                 <FreeBreakfastIcon/>
//                 <p>Frukost</p>
//                 <p>08.00-11.00</p>
//             </div>
//             <div className="activity">
//                 <BusinessCenterIcon/>
//                 <p>Utcheckning och hemfärd</p>
//                 <p>11.00</p>
//             </div>
//         </CustomTabPanel>
//     </Box>
// );
// return (
//     <Container>
//         <div className="program">
//         <div className="sat">
//             <div className="activity">
//                 <FavoriteIcon/>
//                 <p>Vigsel</p>
//                 <p>15:00</p>
//             </div>
//             <div className="activity">
//                 <WineBarIcon/>
//                 <p>Mingel & Foto</p>
//                 <p>15:30</p>
//             </div>
//             <div className="activity">
//                 <RestaurantIcon/>
//                 <p>Middag</p>
//                 <p>17:30</p>
//             </div>
//             <div className="activity">
//                 <CelebrationIcon/>
//                 <p>Fest</p>
//                 <p>22:30</p>
//             </div>
//             <div className="activity">
//                 <WbTwilightIcon/>
//                 <p>Efterfest i sjöstugan</p>
//                 <p>02:00</p>
//             </div>
//         </div>
//         <div className="sun">
//             <div className="activity">
//                 <FreeBreakfastIcon/>
//                 <p>Frukost</p>
//                 <p>08.00-11.00</p>
//             </div>
//             <div className="activity">
//                 <BusinessCenterIcon/>
//                 <p>Utcheckning och hemfärd</p>
//                 <p>11.00</p>
//             </div>
//         </div>
//         </div>
//     </Container>
// );
// };

export default Program;
