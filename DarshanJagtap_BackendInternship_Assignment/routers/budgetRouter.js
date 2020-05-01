const express= require('express');
const budgetController = require('./../controllers/budgetController');
const authController = require('./../controllers/authController');

const router = express.Router();


router.route('/')
.post(authController.protect, budgetController.addBudget);

module.exports = router;