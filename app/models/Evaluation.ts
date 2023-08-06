import mongoose, { Schema, model, Types } from "mongoose";

const evaluationSchema = new Schema({
    question_id: {
        type: Types.ObjectId,
        required: true,
        ref: 'question',
    },
    evaluation: {
        type: Number,
        required: true,
    },
    user_id: {
        type: Types.ObjectId,
        required: true,
        ref: 'user'
    },
    recorded_time: {
        type: Date,
        required: true,
    },
});

const Evaluation = mongoose.models.Evaluation ?? model("evaluation", evaluationSchema);

export default { Evaluation };
