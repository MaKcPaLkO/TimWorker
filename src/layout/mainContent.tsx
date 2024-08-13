import Watch from "../components/watch.tsx";
import ActionButtons from "../components/actionButtons.tsx";

const MainContent = () => {
    return (
        <main className="main">
            <Watch type="stopWatch" />
            <ActionButtons />
            <Watch type="timer" />
        </main>
    )
}

export default MainContent;
