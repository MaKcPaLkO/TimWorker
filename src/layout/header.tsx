import Button from "../components/button.tsx";

const Header = ({taskTitle}: {taskTitle: string}) => {
    return (
        <header className="header">
            <h1 className="header-task">{taskTitle ? taskTitle : "TimWorker"}</h1>
            <Button className="btn btn-list"><span></span></Button>
        </header>
    )
}

export default Header;
