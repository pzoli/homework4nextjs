import Question from "@/app/models/Question";
import connection from "../../lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    connection();
    let result = await Question.Question.find({});
    return NextResponse.json(result);
}
