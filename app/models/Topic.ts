import mongoose, { Schema, model, Types } from "mongoose";
import Question from "./Question";

const topicSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    difficulty_id: {
        type: Types.ObjectId,
        required: true,
        ref: 'difficulty',
    },
    parent_topic_id: {
        type: Types.ObjectId,
        required: false,
        ref: 'topic',
    },
    description: {
        type: String,
        required: false,
    },
});

topicSchema.pre("deleteOne", async function (next) {
    const doc = await this.model.findOne(this.getFilter());
    //console.log(JSON.stringify(doc));
    let res = await Question.Question.deleteMany({ topic_id: doc._id });
    //console.log(JSON.stringify(res));
    next();
});

topicSchema.pre("deleteMany", async function (next) {
    const docs = await this.model.find(this.getFilter());
    //console.log(JSON.stringify(docs));
    docs.forEach(async (doc) => {
        let res = await Question.Question.deleteMany({ topic_id: doc._id });
        //console.log(JSON.stringify(res));
    })
    next();
});


const Topic = mongoose.models.Topic ?? model("topic", topicSchema);

export default { Topic };
