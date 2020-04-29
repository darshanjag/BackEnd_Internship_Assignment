const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now()
    }


});
const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;