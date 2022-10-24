const express = require('express');
const router = express.Router();
const checkauth = require('../../middleware/verifyToken')
const customerController = require('../controllers/customer.controller'); 

// get all employees
router.get('/getSingleCustomer/:id',customerController.getSingleCustomer);
router.put('/editProfile',customerController.createEditProfile);

// router.post('/editProfile',customerController.createEditProfile);



module.exports = router;