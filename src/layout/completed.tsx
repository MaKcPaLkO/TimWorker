import type { RootState } from "../store.ts"
import { Task as TaskType } from "../feature/types.ts"
import { useSelector } from "react-redux";


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
    return (
        <li className="tasks-item">
            <h3 className="tasks-title">{name}</h3>
            <span className="tasks-watch">{time}</span>
            {description && (
                <p className="tasks-desc">{description}</p>
            )}
        </li>
    )
}

export default Completed;
