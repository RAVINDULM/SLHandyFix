var dbConn  = require('../../config/db.config');

var currentDate = new Date().toLocaleDateString("en-CA");
var currentTime = new Date().toLocaleTimeString();

var CustomerAdvertisement = function(jobAdvertisement){
    console.log("model create add: ",jobAdvertisement);
    this.description = jobAdvertisement.description;
    this.postTime = currentTime;
    this.postDate = currentDate;
    this.address = jobAdvertisement.address; 
    this.image = jobAdvertisement.image;
    this.customerId = jobAdvertisement.customerId;
    this.serviceProviderId = jobAdvertisement.serviceProviderId;
    this.title = jobAdvertisement.title;
    this.dueDate = jobAdvertisement.dueDate;
    this.status = jobAdvertisement.status;

    console.log(currentDate);
    console.log(currentTime);
}


var CustomerSpProfileView = function(spProfileView){
    console.log("model create add: ",spProfileView);

    this.serviceProviderId = spProfileView.serviceProviderId;
    this.contactNo = spProfileView.contactNo;
    this.firstName = spProfileView.firstName;
    this.lastName = spProfileView.lastName; 
    this.nic = spProfileView.nic;
    this.area = spProfileView.area;
    this.province = spProfileView.province;
    this.district = spProfileView.district;
    this.gender = spProfileView.gender;
    this.email = spProfileView.email;
    this.qualification = spProfileView.qualification;
    this.jobCategory = spProfileView.jobCategory;
    this.yearsOfExperience = spProfileView.yearsOfExperience;
    this.userId = spProfileView.userId;
}
  

// get all advertisement
CustomerAdvertisement.getAllAdvertisements = (result) =>{
    dbConn.query('SELECT * FROM jobadvertisements,registeredcustomer WHERE (jobadvertisements.customerId = registeredcustomer.customerId) AND status =1 ;', (err, res)=>{
        if(err){
            console.log('Error while fetching job advertisement', err);
            result(null,err);
        }else{
            console.log('job advertisement fetched successfully');
            result(null,res);
        }
    })
}



// get advertisement by id
CustomerAdvertisement.getAllAdvertisementsByID = (adId, result) =>{
    dbConn.query('SELECT * FROM jobadvertisements,registeredcustomer WHERE (jobadvertisements.customerId = registeredcustomer.customerId) AND status =1 AND adId =?', adId, (err, res)=>{
        if(err){
            console.log('Error while fetching job advertisement', err);
            result(null,err);
        }else{
            console.log('job advertisement fetched successfully');
            result(null,res);
        }
    })
}

//create advertisement
CustomerAdvertisement.createNewAdvertisement = (customerJobADReqData, result) =>{

    console.log("model create add: ",customerJobADReqData);
    dbConn.query('INSERT INTO jobadvertisements SET ? ', customerJobADReqData, (err, res)=>{
        
        if(err){
            console.log("I am in")
            
            console.log("Error while inserting data",err);
            result(null, err);
        }else{
            console.log('job advertisement posted successfully');
            result(null, res)
        }
    })
}



// get advertisement by id
CustomerSpProfileView.getSpDetailsByID = (serviceProviderId, result) =>{
    dbConn.query('SELECT * FROM serviceprovider WHERE serviceProviderId =?', serviceProviderId, (err, res)=>{
        if(err){
            console.log('Error while fetching service provider details', err);
            result(null,err);
        }else{
            console.log('sp details fetched successfully');
            result(null,res);
        }
    })
}



module.exports = CustomerAdvertisement, CustomerSpProfileView;
    