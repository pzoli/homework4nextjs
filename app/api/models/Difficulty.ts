import mongoose, { Schema, model, Types } from "mongoose";

const difficultySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
});

export default mongoose.models.Difficulty || model("difficulty", difficultySchema);
