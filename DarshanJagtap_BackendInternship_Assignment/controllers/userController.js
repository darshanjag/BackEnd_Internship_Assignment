const User= require('./../models/userModel');

exports.getUser = async(req,res)=>{
    const user = await User.findById(req.params.id).populate('expenses budget categories');
    res.status(200).json({
        status: 'success',
        data: user
    })
}