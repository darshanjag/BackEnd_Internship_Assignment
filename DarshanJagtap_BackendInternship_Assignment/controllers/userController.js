const User= require('./../models/userModel')
exports.getUser = async(req,res)=>{
    const user = await User.findById(req.params.id).populate('expenses');
    res.status(200).json({
        status: 'success',
        data: user
    })
}