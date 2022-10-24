const AddsModel = require('../models/advertisment.model');

// get all employee list
exports.getAdvertismentList = (req, res)=> {
    console.log('here all customers list');

    AddsModel.getAllAdvertisment((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('services', employees);
        res.send(employees)
    })
}

exports.getAdvertismentById = (req,res) =>{
    console.log("Call to advertisement Id");
    const search_params = req.searchParams;
    console.log(req.params.id);
        // console.log("emp by id");
        AddsModel.getAdvertismentByID(req.params.id, (err, employee) =>{
            console.log('Employee are here');
            if(err)
            res.send(err);
            console.log('Single Employee', employee);
            res.send(employee)
        })
}



