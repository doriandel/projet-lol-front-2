import React, { useEffect, useState } from "react";

function StatMatch(props) {
    const { frames } = props;
    const [events, setEvents] = useState(null);
    const [timestamp, setTimestamp] = useState(null);

    /*******************************************************************
                               LOG OF STATE
        ****************************************************************/

    // console.log("frames props :", frames);
    // console.log("events :", events);
    // console.log("timestamp :", timestamp);

    useEffect(() => {
        if (frames !== null)
            frames.map((events) => {
                // console.log("events :", events.events);
                setEvents(events.events);
            });
       
    }, [frames]);

    useEffect(() => { if (events !== null)
            events.map((timestamp) => {
                // console.log("timestamp :", timestamp.timestamp);
                setTimestamp(timestamp.timestamp);
            });
        }, [events]);

    /*******************************************************************
                            FONCTION RENDER 
        ****************************************************************/
    function renderStatMatch() {
        if (timestamp !== undefined) {
            // timestamp.map((timestamp)=>{
            // console.log("timestamps :", timestamp);
            // if(timestamp =)
            // })
        }
        // else{
            return (
                <div>
                    <h1>Chargement ...</h1>
                </div>
            );
        // }
    }

    /*******************************************************************
                                RENDER 
        ****************************************************************/
    return renderStatMatch();
}

export default StatMatch;
