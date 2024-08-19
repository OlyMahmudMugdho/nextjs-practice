import { deleteTask, Task, tasks, totalTasks } from "@/app/model/tasks";
import { NextResponse } from "next/server";


const getSingleTodo = async (request : Request, context : { params : any }) => {
    const taskId = context.params.id;

    try {
        const task = tasks.filter(item => item.id===parseInt(taskId))
        return NextResponse.json(task[0] || {})
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            {
                "error" : true,
                "message" : "internal server error"
            },
            { status : 500 }
        )
    }
}


export const PUT = async (request : Request, context : { params : any }) => {
    const taskId = context.params.id;

    try {

        if (taskId > totalTasks || taskId <= 0) {
            return NextResponse.json(
                { "error" : true, "message" : "invalid task id" },
                { status : 400 }
            )
        }

        const body : any  = await request.json()
        const task : Task = (await body);

        tasks[taskId] = task;

        return NextResponse.json(tasks[taskId])
        
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { "error" : true, "message" : "internal server error" },
            { status : 500 }
        )
    }
}


export const DELETE = async (req : Request, context : {params : any}) => {
    const taskId = context.params.id;
    
    try {
        if (taskId > totalTasks || taskId <= 0) {
            return NextResponse.json(
                { "error" : true, "message" : "invalid task id" },
                { status : 400 }
            )
        }

        deleteTask(parseInt(taskId))
        
        return NextResponse.json(
            { "ok" : true, "message" : "task deleted" },
            { status : 200 }
        )

    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { "error" : true, "message" : "internal server error" },
            { status : 500 }
        )
    }
}

export const GET = getSingleTodo