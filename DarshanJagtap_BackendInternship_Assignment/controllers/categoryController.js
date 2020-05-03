const Category = require('./../models/categoryModel');

exports.addCategory = async(req,res,next)=>{
    try{
        req.body.user = req.user.id;
        const category = await Category.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                category
            }
        })
    }catch(err){
        next(new AppError(`${err.message}`,500))
    }
}