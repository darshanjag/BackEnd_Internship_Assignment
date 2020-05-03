const Expense = require('./../models/expenseModel');

exports.addExpense = async (req, res) => {
    req.body.user= req.user.id;
    const expense = await Expense.create(req.body);
    res.status(200).json({
        status: 'success',
        data: expense
    });
};
exports.getExpenses = async (req, res) => {

    const expense = await Expense.find();
    res.status(200).json({
        status: 'success',
        data: expense
    })

}

exports.deleteExpense = async (req, res) => {
    const expense = await Expense.findByIdAndUpdate(req.params.id, {
        active: false
    });
    res.status(204).json({
        status: 'success',
        data: null
    })
}