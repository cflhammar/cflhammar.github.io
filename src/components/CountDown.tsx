import React, {useEffect, useState} from "react";
import moment from "moment";
import "./CountDown.css"

const timeValueStyle = {fontSize: "x-large", fontWeight: "bold", margin:0};
const timeTextStyle = {fontSize: "x-small" ,fontStyle: "italic"};


const CountDown = () => {
    const expiration = "2024-06-01T15:00:00+0000"
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            updateTime();
        }, 500)

        return () => clearInterval(interval);
    },)

    const updateTime = () => {
        const now = new Date();
        const exp = moment(expiration);
        const days = exp.diff(now, 'days');
        const hours = exp.subtract(days, 'days').diff(now, 'hours');
        const minutes = exp.subtract(hours, 'hours').diff(now, 'minutes');
        const seconds = exp.subtract(minutes, 'minutes').diff(now, 'seconds');

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }

    return <div className="timer">
        <div className="timer-block">
            <p style={timeValueStyle}> {days}</p>
            <p style={timeTextStyle}> Dagar</p>
        </div>
        <div className="timer-block">
            <p style={timeValueStyle}> {hours}</p>
            <p style={timeTextStyle}> Timmar</p>
        </div>
        <div className="timer-block">
            <p style={timeValueStyle}> {minutes}</p>
            <p style={timeTextStyle}> Minuter</p>
        </div>
        <div className="timer-block">
            <p style={timeValueStyle}> {seconds}</p>
            <p style={timeTextStyle}> Sekunder</p>
        </div>
    </div>
}

export default CountDown;