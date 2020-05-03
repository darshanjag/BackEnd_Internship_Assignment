const Category = require('./../models/categoryModel');
const AppError = require('./../utils/AppError');


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
exports.deleteCategory = async(req,res,next)=>{
    try{
        const category = await Category.findByIdAndDelete(req.params.id);
        res.status(205).json({
            status: 'success',
            data: null
        })
    }catch(err){
        next(new AppError(`${err.message}`,500))
    }
}