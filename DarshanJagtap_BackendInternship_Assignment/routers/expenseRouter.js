const express = require('express');
const expenseController = require("./../controllers/expenseController");
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/')
    .get(authController.protect, expenseController.getExpenses)
    .post(authController.protect,expenseController.addExpense);

router.route('/:id')
    .patch(authController.protect,expenseController.deleteExpense)

module.exports = router;