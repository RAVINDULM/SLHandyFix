const RequestModel = require("../models/request.model");

// get all employee list
exports.getRequestList = (req, res) => {
  // console.log('here all employees list');

  RequestModel.getAllRequest((err, employees) => {
    console.log("We are here");
    if (err) res.send(err);
    console.log("Employees", employees);
    res.send(employees);
  });
};

exports.getRequestById = (req, res) => {

  const search_params = req.searchParams;
  console.log(req.params.NICid);
  // console.log("emp by id");
  RequestModel.getRequestByID(req.params.NICid, (err, employee) => {
    console.log('Employee are here');
    if (err)
      res.send(err);
    console.log('Single Employee', employee);
    res.send(employee)
  })
}

// exports.createProvider = (req, res) => {
//   const employeeReqData = new EmployeeModel(req.body);
//   console.log("Create employee", employeeReqData);
//   // return;
//   // check null
//   if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//     res.send(400).send({ success: false, message: "Please fill all fields" });
//   } else {
//     EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
//       if (err) res.send(err);
//       res.json({
//         status: true,
//         message: "Employee Created Successfully",
//         data: employee,
//       });
//     });
//   }
// };
// update employee
exports.updateRequest = (req, res) => {
  console.log(req.body);
  const employeeReqData = new RequestModel(req.body);
  console.log("employeeReqData update", employeeReqData);
  // check null
  // return;
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    RequestModel.updateRequest(
      req.params.NICid,
      employeeReqData,
      (err, employee) => {
        if (err) res.send(err);
        res.json({ status: true, message: "Employee updated Successfully" });
      }
    );
  }
};

// delete employee
// exports.deleteProvider = (req, res) => {
//   EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
//     if (err) res.send(err);
//     res.json({ success: true, message: "Employee deleted successully!" });
//   });
// };
