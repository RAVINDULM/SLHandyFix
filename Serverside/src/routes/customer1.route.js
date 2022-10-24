const express = require('express');
const router = express.Router();
const customer1Controller = require('../controllers/customer1.controller');



router.post('/submitJobRequest',customer1Controller.submitJobRequest); 

module.exports = router;