const express = require('express');
const router = express.Router();
const checkauth = require('../../middleware/verifyToken')
const customerController = require('../controllers/customer.controller'); 

// get all customers

// router.post('/newAdvertisement' );

router.post('/addNewAdvertisement', customerController.createNewAdvertisement);
router.get('/getAllAdvertisements', customerController.getAllAdvertisements);
router.get('/getAllAdvertisementsByID/:adId', customerController.getAllAdvertisementsByID);

router.get('/getSpDetailsByID/:serviceproviderId', customerController.getSpDetailsByID);

module.exports = router;