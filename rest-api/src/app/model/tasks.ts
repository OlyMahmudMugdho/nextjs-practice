export interface Task {
    id : number, 
    title : string,
    body : string
} 

export const totalTasks : number = 0;

export const tasks : Task[] = [];


export function isValidTask(obj : any) {
    return typeof obj==='object' && typeof obj.title==='string' && typeof obj.body==='string'
}