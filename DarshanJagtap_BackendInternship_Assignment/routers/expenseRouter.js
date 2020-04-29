const express = require('express');
const expenseController = require("./../controllers/expenseController");

const router = express.Router();

router.route('/')
    .get(expenseController.getExpenses)
    .post(expenseController.addExpense);

router.route('/:id')
    .patch(expenseController.deleteExpense)

module.exports = router;