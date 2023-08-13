import connection from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import Topic from "../models/Topic";

export async function GET() {
    await connection();
    let result = await Topic.find({});
    return NextResponse.json(result);
}
