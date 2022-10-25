const express = require('express');
const router = express.Router();
const customer1Controller = require('../controllers/customer1.controller');



router.post('/submitJobRequest',customer1Controller.submitJobRequest); 
router.get('/getserviceproviderlist',customer1Controller.getserviceproviderlist)
router.get('/getjoblist/:getcustomerId',customer1Controller.getjoblist)
router.post('/rateserviceprovider',customer1Controller.setRating)


module.exports = router;