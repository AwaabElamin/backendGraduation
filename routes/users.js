const express = require('express');
const usersController = require('../controllers/users');
const authController = require('../controllers/auth');

const router = express.Router();
router.post('',authController.authorize,usersController.create);
router.get('',authController.authorize,usersController.getAll);

module.exports = router;