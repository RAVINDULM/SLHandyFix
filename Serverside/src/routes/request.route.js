const express = require('express');
const router = express.Router();
const checkauth = require('../../middleware/verifyToken')
const requestController = require('../controllers/request.controller'); 

// // get all employees
 router.get('/',checkauth.verifyAdmin, requestController.getRequestList);
router.get('/getRequest', requestController.getRequestList);
router.get('/getRequest/:id', requestController.getRequestById);
//  router.post('/', providerController.createProvider);
router.put('/getRequest/:id', requestController.updateRequest);
// router.delete('/:id',providerController.deleteProvider);



module.exports = router;