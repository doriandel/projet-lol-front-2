import React, { useEffect, useState } from "react";

function StatMatch(props) {
    const { frames } = props;
    const [events, setEvents] = useState(null);
    const [timestamp, setTimestamp] = useState(null)
    console.log("frames props :", frames);
    // console.log("events :", events);

    useEffect(() => {
        if (frames !== null)
            frames.map((events) => {
                console.log("events :", events.events);
                setEvents(events.events);
                setTimestamp(events.events.timestamp)
            });
    }, [frames]);

    function renderStatMatch() {
        
        if(timestamp !== null){
            // timestamp.map((timestamp)=>{
                console.log("timestamps :",timestamp);
                // if(timestamp =)
            // })
        }
    }

    return renderStatMatch();
}

export default StatMatch;
