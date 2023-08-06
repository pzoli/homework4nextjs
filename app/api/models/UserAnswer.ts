import mongoose, { Schema, model, Types } from "mongoose";

const userAnswerSchema = new Schema({
    question_answer_id: {
        type: Types.ObjectId,
        required: true,
        ref: 'questionanswer'
    },
    recorded_time: {
        type: Date,
        required: false,
    },
    user_id: {
        type: Types.ObjectId,
        required: true,
        ref: 'user'
    },
    thinkingtime: {
        type: Number,
        required: true,
    },
});

export default mongoose.models.UserAnswer || model("useranswer", userAnswerSchema);;
