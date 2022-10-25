const express = require('express');
const router = express.Router();
const checkauth = require('../../middleware/verifyToken')
const complaintController = require('../controllers/complaints.controller'); 

// // get all employees
 router.get('/',checkauth.verifyAdmin, complaintController.getComplaintList);
 router.get('/getComplain', complaintController.getComplaintList);
 router.get('/getComplain/:id', complaintController.getComplaintById);
//  router.post('/', providerController.createProvider);
// router.put('/:id', providerController.updateProvider);
// router.delete('/:id',providerController.deleteProvider);



module.exports = router;