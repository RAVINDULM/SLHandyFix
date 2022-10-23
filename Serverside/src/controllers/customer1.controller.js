const customer1Model = require('../models/customer1.model');

exports.submitJobRequest = (req, res) => {
    console.log("customer1controller", req.body);
    const { title, requiredDate, description,location, district, category,customerId,serviceProviderId,status,image } =new customer1Model (req.body);
    customer1Model.submitJobRequest({title : title, requiredDate : requiredDate, description: description, location: location, district:district, category:category,image: image,customerId:customerId, serviceProviderId: serviceProviderId, status:status }, (err, user) =>{
        if(err){ 
            res.send(err);
        }
        
        else if (!user.length){
        res.send("Create job request successfully!")
        }
    })
}