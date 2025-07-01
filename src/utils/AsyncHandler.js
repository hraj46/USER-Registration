export const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err))
    }
}

// const asyncHandler = (fn) => async (req, res) => {  //CallBack Hell: Calling function inside the function
//     try {
//         await fn (req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

export default asyncHandler;