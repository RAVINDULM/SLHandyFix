const express = require('express');
const router = express.Router();
const checkauth = require('../../middleware/verifyToken')
const customerController = require('../controllers/customer.controller'); 

// get all employees
router.get('/',checkauth.verifyAdmin, customerController.getCustomerList);
router.get('/getCustomer', customerController.getCustomerList);
router.get('/getCustomer/:NICid', customerController.getCustomerById);




module.exports = router;
