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
    },
    user:{
       type: mongoose.Schema.ObjectId,
       ref:'User'
    }


});
//add user id in the document. function called in expenseController
expenseSchema.methods.addUsers = async function (id) {
    this.user = id;
}
const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;