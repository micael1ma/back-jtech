const express = require('express');
const router = express.Router();
const deviceController = require('../controller/deviceController');
const WithAuth = require('../middleware/auth');

router.get('/device', WithAuth, deviceController.getAllDevices);
router.post('/device', WithAuth, deviceController.createDevice);
router.put('/device/:id', WithAuth, deviceController.updateDevice);
router.delete('/device/:id', WithAuth, deviceController.deleteDevice);

module.exports = router;
