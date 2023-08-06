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

const Difficulty = mongoose.models.Difficulty ?? model("difficulty", difficultySchema);

export default { Difficulty };
