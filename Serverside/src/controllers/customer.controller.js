
const CustomerModel = require('../models/customer.model');

exports.createEditProfile = (req , res) =>{
    console.log("controller get data",req.body);
    const customerEditProfileReqData = new CustomerModel(req.body);
    // console.log("Create edit profile",customerEditProfileReqData );
    // return;
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CustomerModel.createEditProfile(customerEditProfileReqData, (err, customer)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Customer Edited Successfully'})
        })
    }
}

// get single customer list
exports.getSingleCustomer = (req, res)=> {
    console.log('here all customers list',req.param.id);

    CustomerModel.getCustomerByID(req.params.id,(err, customer) =>{
        console.log('We are here');
        if(err){
            res.send(err);
        }else{
            console.log('services', customer);
            res.send(customer)
    }
    })
}

// exports.getCustomerById = (req,res) =>{
      
//         // console.log("emp by id");
//         CustomerModel.getAllCustomerByID(req.params.id, (err, employee) =>{
//             console.log('Customers are here');
//             if(err)
//             res.send(err);
//             console.log('Single Employee', customer);
//             res.send(customer)
//         })
// }

