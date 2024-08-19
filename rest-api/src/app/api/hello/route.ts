import { NextApiResponse } from "next"
import { NextResponse } from "next/server"


export const GET = async (res : NextResponse) => {
    res.headers.append("Content-Type", "application/json")
    return NextResponse.json({
        "ok" : true,
        "message" : "hello world"
    }, 
    { status : 200}
)
}   