const AddsModel = require('../models/advertisment.model');

// get all employee list
exports.getAdvertismentList = (req, res) => {
    console.log('here all customers list');

    AddsModel.getAllAdvertisment((err, employees) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('services', employees);
        res.send(employees)
    })
}

exports.getAdvertismentById = (req, res) => {
    console.log("Call to advertisement Id");
    const search_params = req.searchParams;
    console.log(req.params.id);
    // console.log("emp by id");
    AddsModel.getAdvertismentByID(req.params.id, (err, employee) => {
        console.log('Employee are here');
        if (err)
            res.send(err);
        console.log('Single Employee', employee);
        res.send(employee)
    })
}
//update advertisment
exports.updateAdvertisment = (req, res) => {
    const serviceReqData = new AddsModel(req.body);
    console.log('serviceReqData update', serviceReqData);
    // check null
    // return;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        AddsModel.updateAdvertisment(req.params.id, serviceReqData, (err, employee) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Service updated Successfully' })
        })
    }
}


