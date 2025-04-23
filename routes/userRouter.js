const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const WithAuth = require('../middleware/auth');

router.get('/user', WithAuth, userController.getAllUsers);
router.post('/user', WithAuth, userController.createUser);
router.put('/user/:id', WithAuth, userController.updateUser);
router.delete('/user/:id', WithAuth, userController.deleteUser);

module.exports = router;
