const express = require('express');
const router = express.Router();
const checkauth = require('../../middleware/verifyToken')
const providerController = require('../controllers/provider.controller'); 

// // get all employees
 router.get('/',checkauth.verifyAdmin, providerController.getProviderList);
router.get('/getProvider', providerController.getProviderList);
router.get('/getProvider/:NICid', providerController.getProviderById);
//  router.post('/', providerController.createProvider);
router.put('/getProvider/:NICid', providerController.updateProvider);
// router.delete('/:id',providerController.deleteProvider);



module.exports = router;