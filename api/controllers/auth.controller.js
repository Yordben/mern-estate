import User from '../models/user.model.js';
import bycrptjs from 'bcryptjs'

export const signup = async(req, res)=>{
    const {username, email, password} = req.body;
    const hashedpassword = bycrptjs.hashSync(password,10);
    const newUser = new User({ username, email, password:hashedpassword });
    try {
        await newUser.save()
    res.status(201).json("User Created Successfully!")
    } catch (error) {
        res.status(500).json(error.message)
    }
    
}