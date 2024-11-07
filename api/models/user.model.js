import mongoose from "mongoose";
import { type } from "os";

const userScheme = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        
    },
}, { timestamps: true})

const User = mongoose.model('User', userScheme)

export default User;