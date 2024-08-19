import { tasks } from "@/app/model/tasks";
import { request } from "http";
import { NextResponse } from "next/server";


export const GET = async (request : Request, context : { params : any }) => {
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