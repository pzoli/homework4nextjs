import Difficulty from "@/app/api/models/Difficulty";
import connection from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    connection();
    let result = await Difficulty.find({});
    return NextResponse.json(result);
}
