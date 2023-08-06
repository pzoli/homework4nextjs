import mongoose, { Schema, model, Types } from "mongoose";
import QuestionAnswer from "./QuestionAnswer";
import Evaluation from "./Evaluation";

const questionSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    topic_id: {
        type: Types.ObjectId,
        required: true,
        ref: 'topic',
    },
    explanation: {
        type: String,
        required: true,
    },
});

questionSchema.pre("deleteOne", async function (next) {
    const doc = await this.model.findOne(this.getFilter());
    //console.log(JSON.stringify(doc));
    let res = await QuestionAnswer.deleteMany({ question_id: doc._id });
    //console.log(JSON.stringify(res));
    let evalRes = await Evaluation.deleteMany({ question_id: doc._id });
    //console.log(JSON.stringify(evalRes));
    next();
});

questionSchema.pre("deleteMany", async function (next) {
    const docs = await this.model.find(this.getFilter());
    //console.log(JSON.stringify(docs));
    docs.forEach(async (doc) => {
        let res = await QuestionAnswer.deleteMany({ question_id: doc._id });
        //console.log(JSON.stringify(res));
        let evalRes = await Evaluation.deleteMany({ question_id: doc._id });
        //console.log(JSON.stringify(evalRes));
    })
    next();
});

export default mongoose.models.Question || model("question", questionSchema);
