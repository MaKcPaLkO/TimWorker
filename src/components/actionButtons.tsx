import Button from "./button.tsx";
import { useSelector, useDispatch } from "react-redux";
import { initTask, pauseTask, stopTask, resumeTask} from "../feature/tasksSlice.ts";
import { RootState } from "../store.ts"
import {StopwatchResult, TimerResult} from "react-timer-hook";

interface TimeProps {
    timer: TimerResult
    stopwatch: StopwatchResult
}


const ActionButtons = ({timer, stopwatch}: TimeProps) => {
    const workStatus = useSelector((state: RootState) => state.tasks.workStatus)
    const stateTime = useSelector((state: RootState) => state.tasks.currentTask!.time)
    const dispatch = useDispatch();


    const startHandler = () => {
        switch (workStatus) {
            case "standby":
                dispatch(initTask());
                timer.start();
                stopwatch.start();
                break;
            case "pause":
                dispatch(resumeTask());
                const stopwatchOffset = new Date();
                stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + stateTime);
                stopwatch.reset(stopwatchOffset);
                timer.resume();
                break;
        }
    }
    const pauseHandler = () => {
        const seconds = stopwatch.totalSeconds
        timer.pause();
        stopwatch.pause();
        dispatch(pauseTask(seconds))
    }
    const stopHandler = () => {
        timer.pause();
        stopwatch.pause();
        dispatch(stopTask());
    }

    return (
        <div className="actions">

            {(workStatus === "pause" || workStatus === "stop" || workStatus === "standby") && (
                <Button
                    className="btn actions-btn actions-start"
                    onClick={() => startHandler()}
                />
            )}

            {workStatus === "work" && (
                <Button
                    className="btn actions-btn actions-pause"
                    onClick={() => pauseHandler()}
                />
            )}

            {(workStatus === "pause" || workStatus === "work" || workStatus === "initiation") && (
                <Button
                    className="btn actions-btn actions-stop"
                    onClick={() => stopHandler()}
                />
            )}

        </div>
    )
}

export default ActionButtons;
