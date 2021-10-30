import { config } from 'dotenv';
import mongoose from "mongoose";
config();

const Connect = async () => {
    const uri = process.env.URI;
    return await mongoose.connect(uri,{useUnifiedTopology: true, useNewUrlParser:true});
}

export default Connect;