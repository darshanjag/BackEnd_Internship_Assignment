const express = require('express');
const viewController = require('./../controllers/viewController');
const authController = require('./../controllers/authController');

const router = express.Router();


router.route('/dashboard').get(authController.protect,viewController.dashboard);

router.route('/').get(viewController.login);


module.exports = router;