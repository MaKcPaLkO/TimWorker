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
    timer: number
    currentTask?: Task
}

export interface Time {
    hours: number
    minutes: number
}
