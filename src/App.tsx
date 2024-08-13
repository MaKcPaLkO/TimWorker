import './App.css';
import Header from "./layout/header.tsx";
import MainContent from "./layout/mainContent.tsx";
import Completed from "./layout/completed.tsx";
import {useState} from 'react';

function App() {
    const [taskTitle] = useState("");

    return (
        <>
            <Header taskTitle={taskTitle}/>
            <MainContent />
            <Completed />
        </>
    )
}

export default App
