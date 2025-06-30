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
      trim: true,
      index: true,
    },
    // email
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    // avatar/image
    avatar: {
      type: String,  // cloudinary url
      required: true,
    },
    // coverPhoto
    coverImage: {
      type: String,
    },
    // password
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    // refreshToken
    refreshToken: {
      type: String,
    },
},{
    timestamp: true
})

export default user = mongoose.model("User, UserSchema")