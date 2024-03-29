const express = require("express");
const router = express.Router();
const checkauth = require("../../middleware/verifyToken");
const customerJobADController = require("../controllers/customerJobAD.controller");

// get all employees
router.get(
  "/",
  checkauth.verifyAdmin,
  customerJobADController.getCustomerJobADList
);
router.get("/:adId", customerJobADController.getCustomerJobADByID);
router.post("/", customerJobADController.createcustomerJobAD);
router.delete("/:adId", customerJobADController.deletecustomerJobAD);
router.post("/registerCustomer", customerJobADController.RegisterCustomer);

module.exports = router;
