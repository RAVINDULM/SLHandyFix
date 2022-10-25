const express = require("express");
const router = express.Router();
const servProController = require("../controllers/servProv.controller");

router.post(
  "/createAccountReq",
  servProController.upload,
  servProController.careateAccountRequest
);
router.post("/registerPayment", servProController.PayRegisterPayment);
router.get("/getJobposts", servProController.getJobposts);

module.exports = router;
