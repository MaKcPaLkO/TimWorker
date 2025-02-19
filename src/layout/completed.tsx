import type { RootState } from "../store.ts"
import { Task as TaskType } from "../feature/types.ts"
import { useSelector } from "react-redux";
import Watch from "../components/watch.tsx"

const Completed = () => {

    const list = useSelector((state: RootState) => state.tasks.doneTasks)
    const visibleDone = useSelector((state: RootState) => state.tasks.visibleDone)

    return (
        list.length > 0 && visibleDone && (
            <aside className="tasks">
                <h2>Done</h2>
                <ol className="tasks-list">
                    {
                        list?.map((item, index) => (
                            <Task {...item} key={index}/>
                        ))
                    }
                </ol>
            </aside>
        )
    )
}

const Task = ({name, time, description}: TaskType) => {
    const timeDate = new Date(time);
    const hours = timeDate.getHours();
    const minutes = timeDate.getMinutes();

    const timeData = {hours, minutes};

    return (
        <li className="tasks-item">
            <h3 className="tasks-title">{name}</h3>
            <span className="tasks-watch">
                <Watch type="done" time={timeData}/>
            </span>
            {description && (
                <p className="tasks-desc">{description}</p>
            )}
        </li>
    )
}

export default Completed;
