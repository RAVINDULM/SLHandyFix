
var dbConn  = require('../../config/db.config');

var CustomerJobAD = function(customerJobAD){
    console.log("model create add: ",customerJobAD);
    this.adId = customerJobAD.adId;
    this.title = customerJobAD.title;
    this.description = customerJobAD.description;
    this.requiredDate = customerJobAD.requiredDate;
    // this.postDate = customerJobAD.postDate;
    // this.postTime = customerJobAD.postTime;
    // this.image = customerJobAD.image;
    // this.customerId = customerJobAD.customerId;
    // this.serviceProviderId = customerJobAD.serviceProviderId;
    // this.area = customerJobAD.area;
    // this.province = customerJobAD.province;
    this.district = customerJobAD.district;
    this.category = customerJobAD.category;
}
  

// get all employees
CustomerJobAD.getAllcustomerJobAD = (result) =>{
    dbConn.query('SELECT * FROM jobadvertisement', (err, res)=>{
        if(err){
            console.log('Error while fetching job advertisement', err);
            result(null,err);
        }else{
            console.log('job advertisement fetched successfully');
            result(null,res);
        }
    })
}




// get employee by id
CustomerJobAD.getAllcustomerJobADByID= (adId, result) =>{
    dbConn.query('SELECT * FROM jobadvertisement WHERE adId=?', adId, (err, res)=>{
        if(err){
            console.log('Error while fetching job advertisement', err);
            result(null,err);
        }else{
            console.log('job advertisement fetched successfully');
            result(null,res);
        }
    })
}

//create employee
CustomerJobAD.createcustomerJobAD = (customerJobADReqData, result) =>{

    // console.log("model create add: ",customerJobADReqData);
    dbConn.query('INSERT INTO jobadvertisement SET ? ', customerJobADReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('job advertisement posted successfully');
            result(null, res)
        }
    })
}

// update employee
// CustomerJobAD.updateEmployee = (id, employeeReqData, result)=>{
//     dbConn.query("UPDATE employees SET name=?,type=?,status=? WHERE id = ?", [employeeReqData.name,employeeReqData.type,employeeReqData.status, id], (err, res)=>{
//         if(err){
//             console.log('Error while updating the employee');
//             result(null, err);
//         }else{
//             console.log("Employee updated successfully");
//             result(null, res);
//         }
//     });
// }

// delete employee
CustomerJobAD.deletecustomerJobAD = (adId, result)=>{
    dbConn.query('DELETE FROM jobadvertisement WHERE adId=?', [adId], (err, res)=>{
        if(err){
            console.log('Error while deleting the job advertisement');
            result(null, err);
        }else{
            result(null, res);
        }
    })
    // dbConn.query("UPDATE jobadvertisement SET status=? WHERE id = ?", [0, adId], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the job advertisement');
    //         result(null, err);
    //     }else{
    //         console.log("job advertisement deleted successfully");
    //         result(null, res);
    //     }
    // });
}

module.exports = CustomerJobAD;
    