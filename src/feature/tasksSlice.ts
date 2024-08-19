import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { TasksState} from "./types.ts"

import { useId } from "react"


const initialState: TasksState = {
    visibleDone: true,
    doneTasks: [],
    workStatus: "standby",
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        updateTaskTime: (state, action: PayloadAction<number>) => {
            state.currentTask!.time = action.payload
        },
        updateTaskDescription: (state, action: PayloadAction<string>) => {
            state.currentTask!.description = action.payload
        },
        pushTask: (state) => {
            state.doneTasks.push(state.currentTask!)
        },
        toggleVisibleTasks: (state) => {
            state.visibleDone = !state.visibleDone
        },
        initTask: (state) => {
            state.workStatus = "initiation";
        },
        createTask: (state, action: PayloadAction<string>) => {
            state.workStatus = "work";
            state.currentTask = {
                id: useId(),
                name: action.payload,
                time: 0
            }
        },
        pauseTask: (state) => {
            state.workStatus = "pause";
        },
        stopTask: (state) => {
            state.workStatus = "stop";
        },
        finishTask: (state, action: PayloadAction<string>) => {
            state.workStatus = "standby";
            state.currentTask!.description = action.payload || ""
        },
    }
})

export const {
    createTask,
    updateTaskTime,
    updateTaskDescription,
    pushTask,
    initTask,
    pauseTask,
    stopTask,
    finishTask,
    toggleVisibleTasks
} = tasksSlice.actions

export default tasksSlice.reducer
