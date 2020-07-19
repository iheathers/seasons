import React from "react";
import './ScreenDisplay.css';

const seasonConfig = {
    winter: {
        text: "Burr, it's chilly!",
        iconName: "snowflake"
    },
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    }
}

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9){
        return latitude > 0 ? "summer" : "winter"
    } else {
        return latitude > 0 ? "winter" : "summer"
    }
}

const ScreenDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]

    return (
        <div className={`screen-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
}

export default ScreenDisplay;