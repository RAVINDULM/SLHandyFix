const express = require('express');
const router = express.Router();
const checkauth = require('../../middleware/verifyToken')
const serviceController = require('../controllers/service.controller'); 

// get all employees
router.get('/',checkauth.verifyAdmin, serviceController.getServiceList);
// router.get('/:id', serviceController.getServiceById );
router.get('/getService', serviceController.getServiceList);
router.post('/', serviceController.createService);
router.put('/:id', serviceController.updateService);
router.delete('/deleteService/:id',serviceController.deleteService);



module.exports = router;
