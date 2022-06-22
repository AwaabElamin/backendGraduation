const express = require('express');
const usersController = require('../controllers/users');
const authorizationController = require('../controllers/auth');

const router = express.Router();
router.post('',authorizationController.authorize,usersController.create);
router.get('',authorizationController.authorize,usersController.getAll);
router.get('/:id',authorizationController.authorize, usersController.readById);

module.exports = router;