const Budget = require('./../models/budgetModel');
const AppError = require('./../utils/AppError');

exports.addBudget = async(req,res,next)=>{
    req.body.user = req.user.id;
    const count = await Budget.count()
  

    try{
        const budget = await Budget.create(req.body);
        if(!budget){
            return next(new AppError('failed to add budget',500))
        }
        res.status(200).json({
            status: 'success',
            data: {
                budget
            }
        })
    }catch(err){
        next(new AppError(`${err.message}`,500))
    }
}

exports.getBudget = async(req,res,next)=>{
    try{

    const budget = await Budget.findById(req.params.id).populate('expenses');
    res.status(200).json({
        status: 'success',
        data: {
            budget
        }
    })

    }catch(err){
        next(new AppError('some error has occured',500))
    }
}
exports.updateBudget = async(req,res,next)=>{
   
    try{
        const budget = await Budget.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        })
        res.status(200).json({
            status: 'success',
            data: {
                budget
            }
        })
    }catch(err){
        next(new AppError(`${err.message}`,500))
    }
}