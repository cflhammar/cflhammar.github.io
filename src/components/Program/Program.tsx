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
import {Checkroom} from "@mui/icons-material";

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
        fontSize: "x-large",
    }

    const timestyle = {
        margin: 0,
        padding: "3px",
        // fontWeight: "bold",
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
                        <Checkroom/> <br/>
                        <span style={style}>Checka in</span>
                        <span style={timestyle}> Från 13:30</span>
                    </div>
                    <div className="activity">
                        <FavoriteIcon/> <br/>
                        <span style={style}>Vigsel</span>
                        <span style={timestyle}>15:00</span>
                    </div>
                    <div className="activity">
                        <WineBarIcon/> <br/>
                        <span style={style}>Mingel & Foto</span>
                        <span style={timestyle}>15:30</span>
                    </div>
                    <div className="activity">
                        <RestaurantIcon/> <br/>
                        <span style={style}>Middag</span>
                        <span style={timestyle}>17:30</span>
                    </div>
                    <div className="activity">
                        <CelebrationIcon/> <br/>
                        <span style={style}>Fest</span>
                        <span style={timestyle}>22:30</span>
                    </div>
                    <div className="activity">
                        <WbTwilightIcon/> <br/>
                        <span style={style}>Efterfest i sjöstugan</span>
                        <span style={timestyle}>02:00</span>
                    </div>
                </div>
                :
                <div className="sun">
                    <div className="activity">
                        <FreeBreakfastIcon/> <br/>
                        <span style={style}>Frukost</span>
                        <span style={timestyle}>08.00-10.00</span>
                    </div>
                    <div className="activity">
                        <BusinessCenterIcon/> <br/>
                        <span style={style}>Utcheckning och hemfärd</span>
                        <span style={timestyle}>11.00</span>
                    </div>
                </div>}
        </Box>
    );
};

export default Program;
