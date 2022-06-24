const express = require('express');
const usersController = require('../controllers/users');
const authorizationController = require('../controllers/auth');

const router = express.Router();
// router.post('',usersController.create);
// router.get('',authorizationController.authorize,usersController.getAll);
// router.get('/:id',authorizationController.authorize, usersController.readById);
// router.put('',authorizationController.authorize,usersController.update);
// router.put('/role',authorizationController.authorize,authorizationController.adminAuthorize,usersController.updateRole);
// router.delete('',authorizationController.authorize,usersController.delete);

//card
router.post('',authorizationController.authorize,usersController.addBookToCard);
router.get('',authorizationController.authorize,usersController.getAllCard);
router.delete('',authorizationController.authorize,usersController.deleteBookFromCard);

module.exports = router;