import mongoose, { Schema, model, Types } from "mongoose";
import UserAnswer from "./UserAnswer";
import Evaluation from "./Evaluation";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
        select: false
    },
}, { versionKey: false });

userSchema.pre("deleteOne", async function (next) {
    const doc = await this.model.findOne(this.getFilter());
    //console.log(JSON.stringify(doc));
    let resUserAnswer = await UserAnswer.UserAnswer.deleteMany({ user_id: doc._id });
    //console.log(JSON.stringify(resUserAnswer));
    let resEvaluation = await Evaluation.Evaluation.deleteMany({ user_id: doc._id });
    //console.log(JSON.stringify(resEvaluation));
    next();
});

userSchema.pre("deleteMany", async function (next) {
    const docs = await this.model.find(this.getFilter());
    //console.log(JSON.stringify(docs));
    docs.forEach(async (doc) => {
        let resUserAnswer = await UserAnswer.UserAnswer.deleteMany({ user_id: doc._id });
        //console.log(JSON.stringify(resUserAnswer));
        let resEvaluation = await Evaluation.Evaluation.deleteMany({ user_id: doc._id });
        //console.log(JSON.stringify(resEvaluation));
    });
    next();
});


const User = mongoose.models.User ?? model("user", userSchema);

export default { User };
