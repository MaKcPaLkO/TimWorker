interface watchProps {
    type: string
    time: number
}

import { useCallback } from "react";

const Watch = ({type, time}: watchProps) => {
    const formatTime = useCallback((time: number) => {
        const hours =  Math.floor(time / 60);
        let hoursStamp = hours.toString();
        if(hours < 10 && hours >= 0){
            hoursStamp = "0" + hours;
        } else if(hours < 0){
            hoursStamp = "00";
        }

        const mins = time % 60;
        let minsStamp = mins.toString();
        if (mins < 10 && mins >= 0) {
            minsStamp = "0" + mins;
        } else if (mins < 0 ) {
            minsStamp = "00";
        }

        return [hoursStamp, minsStamp]
    }, [])

    const [hours, minutes] = formatTime(time)

    return (
        <div className={"watch " + type}>
            <b>{hours}</b>
            <span>:</span>
            <b>{minutes}</b>
        </div>
    )
}

export default Watch;
