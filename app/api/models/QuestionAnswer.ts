import mongoose, { Schema, model, Types } from "mongoose";
import UserAnswer from "./UserAnswer";

const questionAnswerSchema = new Schema({
    question_id: {
        type: Types.ObjectId,
        required: true,
        ref: 'question',
    },
    answer: {
        type: String,
        required: true,
    },
    isCorrect: {
        type: Boolean,
        required: true,
    },
});

questionAnswerSchema.pre("deleteOne", async function (next) {
    const doc = await this.model.findOne(this.getFilter());
    //console.log(JSON.stringify(doc));
    let res = await UserAnswer.deleteMany({ question_answer_id: doc._id });
    //console.log(JSON.stringify(res));
    next();
});

questionAnswerSchema.pre("deleteMany", async function (next) {
    const docs = await this.model.find(this.getFilter());
    //console.log(JSON.stringify(docs));
    docs.forEach(async (doc) => {
        let res = await UserAnswer.deleteMany({ question_answer_id: doc._id });
        //console.log(JSON.stringify(res));
    })
    next();
});

export default mongoose.models.QuestionAnswer || model("QuestionAnswer", questionAnswerSchema);
