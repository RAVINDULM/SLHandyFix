const CustomerModel = require('../models/customer.model');

var currentDate = new Date().toLocaleDateString("en-CA");
var currentTime = new Date().toLocaleTimeString();
console.log("-----------------------");
console.log(currentDate);
// console.log(currentTime);

exports.createNewAdvertisement = (req , res) =>{
    console.log("controler called",req.body);
    const {description,postTime, postDate,address,image, customerId,serviceProviderId,title, dueDate,status} = new CustomerModel(req.body)


    CustomerModel.createNewAdvertisement({ description: description,postTime: currentTime, postDate: currentDate,address: address,image: image,customerId:"0000", title : title, dueDate: dueDate,  status: 0}, (err, customer) =>{
        if(err){ 
            res.send(err);
        }
        
        else if (!customer.length){
            console.log("awada")
        res.send("Create job request successfully!")
        }
    })


    // const customerJobADReqData = new CustomerModel(req.body);
    // console.log("Create advertisement",customerJobADReqData );
    // // return;
    // // check null
    // if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    //     res.send(400).send({success: false, message: 'Please fill all fields'});
    // }else{
    //     CustomerModel.createNewAdvertisement(customerJobADReqData, (err, customer)=>{
    //         if(err)
    //         res.send(err);
    //         res.json({status: true, message: 'Advertisement Created Successfully'})
    //     })
    // }
}

exports.getAllAdvertisements = (req, res)=> {
    console.log("controll called")
    // res.send("")
    CustomerModel.getAllAdvertisements((err, adds) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('adds controller', adds);
        res.send(adds)
    })
}

exports.getAllAdvertisementsByID = (req,res) =>{
      
        // console.log("emp by id");
        CustomerModel.getAllAdvertisementsByID(req.params.adId, (err, addsbyID) =>{
            console.log('Advertisements are here');
            if(err)
            res.send(err);
            console.log('Single Advertisement', addsbyID);
            res.send(addsbyID)
        })
}


exports.getSpDetailsByID = (req,res) =>{
      
    // console.log("emp by id");
    CustomerModel.getSpDetailsByID(req.params.id, (err, addsbyID) =>{
        console.log('Advertisements are here');
        if(err)
        res.send(err);
        console.log('Single Advertisement', addsbyID);
        res.send(addsbyID)
    })
}