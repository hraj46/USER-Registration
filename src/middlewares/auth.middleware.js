import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/AsyncHandler.js";

export const verifyJWT = asyncHandler(async (req, resizeBy, next) => {
    try {
        const token = await req.cookie?.accessToken || req.header("Authorization")?.replace("Baerer ", "");
    
        // console.log("Authorized Token : ", token);
    
        if(!token){
            throw new ApiError(401, "Unauthorized request");
        }
    
        const decodedToken = JsonWebTokenError.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
    
        if(!user){
            throw new ApiError(401, "Invalid Access Token");
        }
    
        req.user = user;
    } catch (error) {
        throw new ApiError(401, "Invalid access token" || error.message);
    }
})