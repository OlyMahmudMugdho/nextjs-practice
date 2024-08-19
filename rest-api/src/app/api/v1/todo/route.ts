import { isValidTask, Task, tasks } from "@/app/model/tasks"
import { NextRequest, NextResponse } from "next/server"


export const GET = async () => {
    return NextResponse.json(
        tasks,
        { status: 200 }
    )
}

export const POST = async (req: Request) => {
    try {
        const body: any = await req.json()
        const task: Task = (await body)

        if (!isValidTask(task)) {
            return NextResponse.json(
                { "error": true, "message": "invalid request" },
                { status: 400 }
            )
        }

        tasks.push(task)
        return NextResponse.json(tasks, { status: 200 })

    } catch (error) {
        return NextResponse.json(
            { "error": true, },
            { status: 500 }
        )
    }

}