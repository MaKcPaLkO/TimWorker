interface TaskProps {
    name: string
    time: string
    description?: string
}
interface CompletedProps {
    list?: TaskProps[]
}

const Completed = ({list}: CompletedProps) => {

    return (
        <aside className="tasks">
            <h2>Done</h2>
            <ol className="tasks-list">
                {
                    list?.map((item, index) => (
                        <Task {...item} key={index} />
                    ))
                }
            </ol>
        </aside>
    )
}

const Task = ({name, time, description} : TaskProps) => {
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
