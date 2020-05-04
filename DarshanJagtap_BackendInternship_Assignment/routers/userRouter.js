const express = require('express');

const router = express.Router();

const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/logout').get(authController.logout);
router.route('/:id').patch(authController.protect, userController.updateUser);
router.route('/')
.get(authController.protect, userController.getUser);

module.exports = router;