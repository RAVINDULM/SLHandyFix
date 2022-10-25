const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.contoller');


router.post('/CreateAccount',adminController.createManager)
router.get('/getManager',adminController.getManagerList)

module.exports = router;