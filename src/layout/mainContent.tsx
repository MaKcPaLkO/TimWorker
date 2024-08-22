import Watch from "../components/watch.tsx";
import ActionButtons from "../components/actionButtons.tsx";
import {useSelector} from "react-redux"
import {RootState} from "../store.ts"

const MainContent = () => {
    const timer = useSelector((state: RootState) => state.tasks.timer)
    const stopWatch = useSelector((state: RootState) => state.tasks.currentTask!.time)

    return (
        <main className="main">
            <Watch type="stopWatch" time={stopWatch}/>
            <ActionButtons />
            <Watch type="timer" time={timer}/>
        </main>
    )
}

export default MainContent;
