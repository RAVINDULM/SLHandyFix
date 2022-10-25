const CustomerModel = require('../models/customer.model');

// get all employee list
exports.getCustomerList = (req, res)=> {
    console.log('here all customers list');

    CustomerModel.getAllCustomers((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('services', employees);
        res.send(employees)
    })
}

exports.getCustomerById = (req,res) =>{
    const search_params = req.searchParams;
         console.log(req.params.NICid);
        CustomerModel.getCustomerByID(req.params.NICid, (err, employee) =>{
            console.log('Employee are here');
            if(err)
            res.send(err);
            console.log('Single Employee', employee);
            res.send(employee)
        })
}

