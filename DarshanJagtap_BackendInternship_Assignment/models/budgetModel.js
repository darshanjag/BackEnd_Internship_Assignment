const mongoose = require('mongoose');

const budgetScehama = mongoose.Schema({
    budget:{
        type: Number,
        required: [true, 'budget must be provided']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true,'user must be there to have budget']
    }
})

budgetScehama.virtual('expenses',{
    ref: 'Expense',
    foreignField: 'user',
    localField: 'user'
})
const Budget = mongoose.model('Budget',budgetScehama);
module.exports = Budget;  