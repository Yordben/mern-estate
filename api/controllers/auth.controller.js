import User from '../models/user.model.js';
import bycrptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'

export const signup = async(req, res,next)=>{
    const {username, email, password} = req.body;
    const hashedpassword = bycrptjs.hashSync(password,10);
    const newUser = new User({ username, email, password:hashedpassword });
    
    try {
        await newUser.save()
    res.status(201).json("User Created Successfully!")
    } catch (error) {
        //next(errorHandler(550, 'error from the function'))
        next(error)
    }
    
}

export const signin =  async(req, res,next) => {
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({email})
        if(!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bycrptjs.compareSync(password, validUser.password)
        if(!validPassword) return next(errorHandler(401, 'Wrong Credentials!'))
        const token = jwt.sign({id: validUser._id }, process.env.JWT_SECRET);
        const {password: pass, ...rest} = validUser._doc;
        res.cookie('access-token', token, {httpOnly:true })
       .status(200).json(rest)
    } catch (error) {
        next(error)
    }
}