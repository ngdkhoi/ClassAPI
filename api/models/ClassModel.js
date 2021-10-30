import { ObjectId } from 'bson';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    ClassID:{
        type: String,
        required: true
    },
    ClassName:{
        type: String,
        required: true
    },
    StudentAmount:{
        type: Number,
        require: true
    },
    NumberStudent:{
        type:Number,
        required: true
    },
    Teacher: {
        type: String,
        required: true
    }
});

export default mongoose.model('Classes', ClassSchema);

