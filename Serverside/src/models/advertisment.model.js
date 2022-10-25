var dbConn  = require('../../config/db.config');

var Advertisment = function(adds){
    //this.customerId = customer.customerId;
    this.addId = adds.addId;
    this.description = adds.description;
    this.postTime = adds.postTime;
    this.postDate = adds.postDate;
    this.image = adds.image;
    this.customerId = adds.customerId;
    this.serviceProviderId= adds.serviceProviderId;
    this.address = adds.address;
    this.title= adds.title;
    this.dueDate= adds.dueDate;
    this.status= adds.status;
}
  

// get all employees
Advertisment.getAllAdvertisment = (result) =>{
    console.log("getalladds")
    dbConn.query('SELECT * FROM jobadvertisements INNER JOIN registeredcustomer ON jobadvertisements.customerId=registeredcustomer.customerId;', (err, res)=>{
        if(err){
            console.log('Error while fetching adds', err);
            result(null,err);
        }else{
            console.log("dbservices")
            console.log('Addss fetched successfully');
            result(null,res);
        }
    })
}




// get employee by id
Advertisment.getAllAdvertismentByID= (id, result) =>{
    dbConn.query('SELECT * FROM  jobadvertisement WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching data', err);
            result(null,err);
        }else{
            console.log('Adds fetched successfully');
            result(null,res);
        }
    })
}

Advertisment.getAdvertismentByID= (id, result) =>{
    console.log("id",id);
    let query = "SELECT * FROM jobadvertisements INNER JOIN registeredcustomer ON jobadvertisements.customerId=registeredcustomer.customerId WHERE adId='"+id+"'";
    dbConn.query(query, (err, res)=>{
        if(err){
            console.log('Error while fetching data', err);
            result(null,err);
        }else{
            console.log('Adds fetched successfully');
            result(null,res);
        }
    })
}

Advertisment.updateAdvertisment = (id, serviceReqData, result)=>{
    console.log(id);
    dbConn.query("UPDATE jobadvertisements SET status=? WHERE adId = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while updating the service');
            result(null, err);
        }else{
            console.log("Advertisment updated successfully");
            result(null, res);
        }
    });
}





module.exports = Advertisment;
    