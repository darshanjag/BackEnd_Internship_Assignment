const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    name: {
        type: String
    },
    amount: {
        type: Number
    },
    category: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }


});
const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;