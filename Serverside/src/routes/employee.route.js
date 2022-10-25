const express = require("express");
const router = express.Router();
const checkauth = require("../../middleware/verifyToken");
const employeeController = require("../controllers/employee.controller");

// get all employees
router.get("/", checkauth.verifyAdmin, employeeController.getEmployeeList);
router.get("/:id", employeeController.getEmployeeById);
router.post("/", employeeController.createEmployee);
router.put("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
