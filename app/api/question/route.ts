import Question from "@/app/api/models/Question";
import connection from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    connection();
    let result = await Question.find({});
    return NextResponse.json(result);
}
