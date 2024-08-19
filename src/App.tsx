import './App.css';
import Header from "./layout/header.tsx";
import MainContent from "./layout/mainContent.tsx";
import Completed from "./layout/completed.tsx";
import Modal from "./layout/modal.tsx";

import { useSelector } from "react-redux";
import type { RootState } from "./store.ts"


function App() {
    const workStatus = useSelector((state: RootState) => state.tasks.workStatus)

    return (
        <>
            <Header />
            <MainContent />
            <Completed />
            {workStatus === "initiation" && (
                <Modal type="name" title="Enter task name, please" mandatory={true}/>
            )}
            {workStatus === "stop" && (
                <Modal type="description" title="Enter task description, optional" mandatory={false}/>
            )}
        </>
    )
}

export default App
