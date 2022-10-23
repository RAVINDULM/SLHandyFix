const ServiceModel = require('../models/service.model');

// get all employee list
exports.getServiceList = (req, res)=> {
    // console.log('here all employees list');

    ServiceModel.getAllServices((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('services', employees);
        res.send(employees)
    })
}

exports.getServiceById = (req,res) =>{
      
        // console.log("emp by id");
        ServiceModel.getAllServiceByID(req.params.id, (err, employee) =>{
            console.log('Employee are here');
            if(err)
            res.send(err);
            console.log('Single Employee', employee);
            res.send(employee)
        })
}

exports.createService = (req , res) =>{
    console.log("create service controller",req.body);
    const serviceReqData = new ServiceModel(req.body);
    console.log("Create service",serviceReqData );
    // return;
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ServiceModel.createService(serviceReqData, (err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee Created Successfully', data: employee})
        })
    }
}
//update employee
exports.updateService = (req, res)=>{
    const serviceReqData = new EmployeeModel(req.body);
    console.log('serviceReqData update', serviceReqData);
    // check null
    // return;
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ServiceModel.updateService(req.params.id, serviceReqData, (err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Service updated Successfully'})
        })
    }
}

// // delete employee
// exports.deleteService = (req, res)=>{
//     ServiceModel.deleteService(req.params.id, (err, service)=>{
//         if(err)
//         res.send(err);
//         res.json({success:true, message: 'Service deleted successully!'});
//     })
// }