import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // username
    userName:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true

    },
    // fullname
    fullName: {
        type: String,
        required: true,
        trim: true
    }
    // email
    // avatar/image
    // coverPhoto
    // password
    // refreshToken
},{
    timestamp: true
})

export default user = mongoose.model("User, UserSchema")