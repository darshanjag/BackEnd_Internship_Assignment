const mongoose = require('mongoose');
const budgetController = require('./../controllers/budgetController');
const router = mongoose.Route();

router.route('/budget')
.post(budgetController.addBudget);