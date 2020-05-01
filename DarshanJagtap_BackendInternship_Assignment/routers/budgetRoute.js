const mongoose = require('mongoose');
const budgetController = require('./../controllers/budgetController');
const authController = require('./../controllers/authController');

const router = mongoose.Route();

router.route('/budget')
.post(authController.protect, budgetController.addBudget);