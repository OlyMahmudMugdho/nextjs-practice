export interface Task {
    id : number, 
    title : string,
    body : string
} 

export let totalTasks : number = 0;


export let tasks : Task[] = [];


export function isValidTask(obj : any) {
    return typeof obj==='object' && typeof obj.title==='string' && typeof obj.body==='string'
}

export function addTask(task : Task) : Task {
    tasks.push({...task, id : totalTasks + 1})
    totalTasks ++
    return tasks[totalTasks - 1]
}

export function deleteTask(taskId : number) {
    tasks = tasks.filter(task => task.id !== taskId)
}