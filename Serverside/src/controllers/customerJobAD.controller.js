const CustomerJobADModel = require('../models/customerJobAD.model');

// get all job ad list
exports.getCustomerJobADList = (req, res)=> {
    // console.log('here all job ads list');

    CustomerJobADModel.getAllcustomerJobAD((err, jobadvertisement) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('CustomerJobADs', jobadvertisement);
        res.send(jobadvertisement)
    })
}

exports.getCustomerJobADByID = (req,res) =>{
      
        // console.log("jobad by id");
        CustomerJobADModel.getAllcustomerJobADByID(req.params.id, (err, customerJobAD) =>{
            console.log('CustomerJobADs are here');
            if(err)
            res.send(err);
            console.log('Single CustomerJobAD', customerJobAD);
            res.send(customerJobAD)
        })
}

exports.createcustomerJobAD = (req , res) =>{

    console.log("controller job add called: ",req.body)
    const customerJobADReqData = new CustomerJobADModel(req.body);
    console.log("Create customerJobAD",customerJobADReqData );
    // return;
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CustomerJobADModel.createcustomerJobAD(customerJobADReqData, (err, customerJobAD)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Job advertisement Created Successfully', data: customerJobAD})
        })
    }
}
// update employee
// exports.updateEmployee = (req, res)=>{
//     const employeeReqData = new EmployeeModel(req.body);
//     console.log('employeeReqData update', employeeReqData);
//     // check null
//     // return;
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.send(400).send({success: false, message: 'Please fill all fields'});
//     }else{
//         EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee)=>{
//             if(err)
//             res.send(err);
//             res.json({status: true, message: 'Employee updated Successfully'})
//         })
//     }
// }

// delete jobad
exports.deletecustomerJobAD = (req, res)=>{
    CustomerJobADModel.deletecustomerJobAD(req.params.id, (err, customerJobAD)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'job advertisement deleted successully!'});
    })
}