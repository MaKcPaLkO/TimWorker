import {Time} from "../feature/types.ts"

interface watchProps {
    type?: string
    time: Time
}

const Watch = ({type, time}: watchProps) => {

    return (
        <div className={"watch " + type}>
            <b>{time.hours < 10 ? "0" + time.hours : time.hours}</b>
            <span>:</span>
            <b>{time.minutes < 10 ? "0" + time.minutes : time.minutes}</b>
        </div>
    )
}

export default Watch;
