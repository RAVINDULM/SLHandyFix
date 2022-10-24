const express = require('express');
const router = express.Router();
const checkauth = require('../../middleware/verifyToken')
const advertismentController = require('../controllers/advertisment.controller'); 
// const {getAdvertismentById} = require('../controllers/advertisment.controller');

// get all employees
router.get('/',checkauth.verifyAdmin, advertismentController.getAdvertismentList);
router.get('/getAdvertisment', advertismentController.getAdvertismentList);
router.get('/getAdvertisment/:id',advertismentController.getAdvertismentById);




module.exports = router;
