import { tasks } from "@/app/model/tasks"
import { NextResponse } from "next/server"


export const GET = async () => {
    return NextResponse.json(
        tasks,
        { status: 200 }
    )
}