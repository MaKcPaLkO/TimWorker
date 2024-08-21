import Button from "./button.tsx";
import { useSelector, useDispatch } from "react-redux";
import { initTask, pauseTask, stopTask, rerunTask} from "../feature/tasksSlice.ts";
import { RootState } from "../store.ts"

const ActionButtons = () => {
    const workStatus = useSelector((state: RootState) => state.tasks.workStatus)
    const dispatch = useDispatch();

    const startHandler = () => {
        switch (workStatus) {
            case "standby":
                dispatch(initTask());
                break;
            case "pause":
                dispatch(rerunTask());
                break;
        }
    }
    const pauseHandler = () => {
        dispatch(pauseTask())
    }
    const stopHandler = () => {
        dispatch(stopTask())
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
