import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { TasksState, Task } from "./types.ts"

const clearCurrentTask: Task = {
    id: "",
    name: "",
    time: 0
}

const initialTimer = 8 * 60

const initialState: TasksState = {
    visibleDone: true,
    doneTasks: [],
    workStatus: "standby",
    timer: initialTimer,
    currentTask: clearCurrentTask,
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        updateTaskTime: (state, action: PayloadAction<number>) => {
            state.currentTask!.time = action.payload
        },
        toggleVisibleTasks: (state) => {
            state.visibleDone = !state.visibleDone
        },
        initTask: (state) => {
            state.workStatus = "initiation";
        },
        createTask: (state, action: PayloadAction<string>) => {
            const id = action.payload + (Math.random() * 100).toFixed(0);
            state.workStatus = "work";
            state.currentTask = {
                id,
                name: action.payload,
                time: 0
            }
        },
        pauseTask: (state) => {
            state.workStatus = "pause";
        },
        rerunTask: (state) => {
            state.workStatus = "work";
        },
        stopTask: (state) => {
            state.workStatus = "stop";
        },
        finishTask: (state, action: PayloadAction<string>) => {
            state.workStatus = "standby"
            state.currentTask!.description = action.payload || ""
            state.doneTasks.push(state.currentTask!)
            state.currentTask = clearCurrentTask
        },
    }
})

export const {
    createTask,
    updateTaskTime,
    initTask,
    pauseTask,
    rerunTask,
    stopTask,
    finishTask,
    toggleVisibleTasks
} = tasksSlice.actions

export default tasksSlice.reducer
