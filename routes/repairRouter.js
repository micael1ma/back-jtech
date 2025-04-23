const express = require('express');
const router = express.Router();
const repairController = require('../controller/repairController');
const WithAuth = require('../middleware/auth');

router.get('/repair', WithAuth, repairController.getAllRepairs);
router.post('/repair', WithAuth, repairController.createRepair);
router.put('/repair/:id', WithAuth, repairController.updateRepair);
router.delete('/repair/:id', WithAuth, repairController.deleteRepair);

module.exports = router;
