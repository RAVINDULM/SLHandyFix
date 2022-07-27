const express = require('express');
const router = express.Router();
const checkauth = require('../../middleware/AuthMddleware')
const employeeController = require('../controllers/employee.controller');

// get all employees
router.get('/',checkauth.validateToken, employeeController.getEmployeeList);
router.get('/:id', employeeController.getEmployeeById);
router.post('/', employeeController.createEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id',employeeController.deleteEmployee);

// router.get('/', checkauth.validateToken , (req, res) => {
//     console.log("helllo employees")
//     // res.json(privatePosts);
// })

module.exports = router;