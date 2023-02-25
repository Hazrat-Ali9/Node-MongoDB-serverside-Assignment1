const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();


router.route('/')
    .get(userController.getAllUsers)
    .post(userController.postAUser)

router.route('/random')
    .get(userController.getAUser)

router.route('/:id')
    .patch(userController.updateAUser)
    .delete(userController.deleteAUser)
    
router.route('/bulk-update/')
    .patch(userController.updateMultiUser)


module.exports = router    