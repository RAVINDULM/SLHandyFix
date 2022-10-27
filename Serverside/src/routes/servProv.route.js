const express = require("express");
const router = express.Router();
const servProController = require("../controllers/servProv.controller");

router.post("/createAccountReq", servProController.careateAccountRequest);
router.post("/registerPayment", servProController.PayRegisterPayment);
router.get("/getJobposts", servProController.getJobposts);
router.get("/getJobRequests", servProController.getJobRequests);
router.put("/acceptJobRequest/:id", servProController.acceptJobRequest);
router.get("/getServiceProviderJobs", servProController.getServiceProviderJobs);
router.put("/startJob/:id", servProController.startJob);

module.exports = router;
