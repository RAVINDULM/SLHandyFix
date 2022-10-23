const express = require('express');
const router = express.Router();
const checkauth = require('../../middleware/verifyToken')
const providerController = require('../controllers/provider.controller'); 

// // get all employees
 router.get('/',checkauth.verifyAdmin, providerController.getProviderList);
router.get('/:id', providerController.getProviderById);
 router.post('/', providerController.createProvider);
router.put('/:id', providerController.updateProvider);
router.delete('/:id',providerController.deleteProvider);



module.exports = router;