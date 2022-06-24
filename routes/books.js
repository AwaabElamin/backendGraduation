const express = require('express');
const bookdController = require('../controllers/books');
const authorizationController = require('../controllers/auth');

const router = express.Router();
router.post('',authorizationController.authorize, authorizationController.adminAuthorize,bookdController.create);
router.get('',authorizationController.authorize,bookdController.getAll);
router.get('/:id',authorizationController.authorize, bookdController.readById);
router.put('',authorizationController.authorize,authorizationController.adminAuthorize,bookdController.update);
router.delete('',authorizationController.authorize,authorizationController.adminAuthorize,bookdController.delete);


module.exports = router;