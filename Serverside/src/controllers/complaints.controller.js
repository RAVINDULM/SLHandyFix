const ComplaintModel = require('../models/complaints.model');

// get all employee list
exports.getComplaintList = (req, res)=> {
    // console.log('here all employees list');

    ComplaintModel.getAllComplaints((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', employees);
        res.send(employees)
    })
}

exports.getComplaintById = (req,res) =>{
      
        console.log("emp by id",req.params.id);
        ComplaintModel.getComplaintByID(req.params.id, (err, employee) =>{
            console.log('Employee are here');
            if(err)
            res.send(err);
            console.log('Single Employee', employee);
            res.send(employee)
        })
}

// exports.createProvider = (req , res) =>{
//     const employeeReqData = new EmployeeModel(req.body);
//     console.log("Create employee",employeeReqData );
//     // return;
//     // check null
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.send(400).send({success: false, message: 'Please fill all fields'});
//     }else{
//         EmployeeModel.createEmployee(employeeReqData, (err, employee)=>{
//             if(err)
//             res.send(err);
//             res.json({status: true, message: 'Employee Created Successfully', data: employee})
//         })
//     }
// }
// update employee
exports.updateComplaint = (req, res)=>{
    const employeeReqData = new ComplaintModel(req.body);
    console.log('employeeReqData update', employeeReqData);
    // check null
    // return;
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ComplaintModel.updateComplaint(req.params.id, employeeReqData, (err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Complaint updated Successfully'})
        })
    }
}

// // delete employee
// exports.deleteProvider = (req, res)=>{
//     EmployeeModel.deleteEmployee(req.params.id, (err, employee)=>{
//         if(err)
//         res.send(err);
//         res.json({success:true, message: 'Employee deleted successully!'});
//     })
// }