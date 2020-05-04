const express = require('express');
const viewController = require('./../controllers/viewController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/').get(viewController.signup)

router.route('/dashboard').get(authController.protect,viewController.dashboard);

router.route('/login').get(viewController.login);

router.route('/settings').get(authController.protect,viewController.settings);

module.exports = router;