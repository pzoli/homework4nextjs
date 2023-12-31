import connection from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import Difficulty from "../models/Difficulty";

export async function GET() {
    await connection();
    let result = await Difficulty.find({});
    return NextResponse.json(result);
}
