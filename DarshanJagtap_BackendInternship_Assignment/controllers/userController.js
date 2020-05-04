const User= require('./../models/userModel');
const AppError = require('./../utils/AppError');

exports.getUser = async(req,res)=>{
    const user = req.user;
    
    // const user = await User.findById(req.params.id).populate('expenses budget categories');
    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
}

exports.updateUser = async(req,res,next)=>{
    try{
        console.log(req.body);
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        })
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    }catch(err){
        next(new AppError(`${err.message}`,500))
    }
}