const express = require('express');
const usersController = require('../controllers/users');
const authorizationController = require('../controllers/auth');

const router = express.Router();
router.post('',usersController.create);
router.get('',authorizationController.authorize,usersController.getAll);
router.get('/:id',authorizationController.authorize, usersController.readById);
router.put('',authorizationController.authorize,usersController.update);
router.put('/role',authorizationController.authorize,authorizationController.adminAuthorize,usersController.updateRole);
router.delete('',authorizationController.authorize,usersController.delete);

//card
router.post('/card',authorizationController.authorize,usersController.addBookToCard);
router.get('/card',authorizationController.authorize,usersController.getAllCard);

module.exports = router;