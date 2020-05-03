const express = require('express');

const categoryController = require('./../controllers/categoryController');
const authController = require('./../controllers/authController')
const router = express.Router()

router.route('/').post(authController.protect, categoryController.addCategory);

router.route('/:id').delete(authController.protect, categoryController.deleteCategory)

module.exports = router;

