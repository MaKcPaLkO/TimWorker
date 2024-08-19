export interface Task {
    id: string
    name: string
    time: number
    description?: string
}

export interface TasksState {
    visibleDone: boolean
    doneTasks: Task[]
    workStatus: string
    currentTask?: Task
}
