import mongoose from "mongoose";
import { type } from "os";

const userScheme = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
        
    },
}, { timestamps: true})

const User = mongoose.model('User', userScheme)

export default User;