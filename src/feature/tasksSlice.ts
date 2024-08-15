import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { TasksState} from "./types.ts"

import { useId } from "react"


const initialState: TasksState = {
    visibleDone: true,
    doneTasks: [],
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        createTask: (state, action: PayloadAction<string>) => {
            state.currentTask = {
                id: useId(),
                name: action.payload,
                time: 0
            }
        },
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
        }
    }
})

export const {
    createTask,
    updateTaskTime,
    updateTaskDescription,
    pushTask,
    toggleVisibleTasks
} = tasksSlice.actions

export default tasksSlice.reducer
