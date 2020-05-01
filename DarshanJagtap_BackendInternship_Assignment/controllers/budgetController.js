const Budget = require('./../models/budgetModel');
const AppError = require('./../utils/AppError');

exports.addBudget = async(req,res,next)=>{
    req.body.user = req.user.id;
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
}