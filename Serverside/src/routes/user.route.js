const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// router.get('/', userController.login);
router.post('/',  userController.register);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.post('/forgotpassword',userController.forgotpawd);
router.post('/ResetPassword',userController.ResetPassword)
router.post('/callOTP',userController.callOTP);
router.post('/createManger',userController.registerManager);

module.exports = router;
