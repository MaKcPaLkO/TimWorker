import Watch from "../components/watch.tsx"
import ActionButtons from "../components/actionButtons.tsx"
import {Time} from "../feature/types.ts"
import {useStopwatch, useTimer} from "react-timer-hook";


const MainContent = () => {
    // const timer = useSelector((state: RootState) => state.tasks.timer)
    // const stopWatch = useSelector((state: RootState) => state.tasks.currentTask!.time)

    const time = new Date();
    time.setMinutes(time.getMinutes() + (8 * 60));
    const timer = useTimer({expiryTimestamp: time, autoStart: false})
    const stopwatch = useStopwatch({autoStart: false})

    const stopwatchValue: Time = {
        hours: stopwatch.hours,
        minutes: stopwatch.minutes
    }

    const timerValue: Time = {
        hours: timer.hours,
        minutes: timer.minutes
    }

    return (
        <main className="main">
            <Watch type="stopWatch" time={stopwatchValue}/>
            <ActionButtons timer={timer} stopwatch={stopwatch}/>
            <Watch type="timer" time={timerValue}/>
        </main>
    )
}

export default MainContent;
