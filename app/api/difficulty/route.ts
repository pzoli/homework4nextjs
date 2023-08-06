import Difficulty from "@/app/models/Difficulty";
import connection from "../../lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    connection();
    let result = await Difficulty.Difficulty.find({});
    return NextResponse.json(result);
}
