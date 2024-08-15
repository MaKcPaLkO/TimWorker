import Button from "../components/button.tsx"
import type { RootState } from "../store.ts"
import { useSelector, useDispatch } from "react-redux"

import { toggleVisibleTasks } from "../feature/tasksSlice.ts"

const Header = () => {
    const dispatch = useDispatch();
    const currentTask = useSelector((state: RootState) => state.tasks.currentTask)
    const list = useSelector((state: RootState) => state.tasks.doneTasks)

    return (
        <header className="header">
            <h1 className="header-task">{currentTask?.name ? currentTask.name : "TimWorker"}</h1>
            {list.length > 0 && (
                <Button
                    className="btn btn-list"
                    onClick={() => dispatch(toggleVisibleTasks())}
                ><span></span></Button>
            )}
        </header>
    )
}

export default Header;
