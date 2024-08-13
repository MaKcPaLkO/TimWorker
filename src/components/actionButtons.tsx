import Button from "./button.tsx";

const ActionButtons = () => {
    return (
        <div className="actions">
            <Button className="btn actions-btn actions-start" />
            <Button className="btn actions-btn actions-pause" />
            <Button className="btn actions-btn actions-stop" />
        </div>
    )
}

export default ActionButtons;
