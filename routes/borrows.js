const express = require('express');
const borrowsController = require('../controllers/borrows');
const authorizationController = require('../controllers/auth');

const router = express.Router();
router.post('',borrowsController.create);
router.get('',authorizationController.authorize,borrowsController.getAll);
router.get('/:id',authorizationController.authorize, borrowsController.readById);
router.put('',authorizationController.authorize,borrowsController.update);
router.delete('',authorizationController.authorize,authorizationController.adminAuthorize,borrowsController.delete);

//card
router.post('/card',authorizationController.authorize,borrowsController.create);
router.get('/card',authorizationController.authorize,borrowsController.getAll);

module.exports = router;