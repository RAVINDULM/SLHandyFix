const { query } = require('../../config/db.config');
var dbConn = require('../../config/db.config');

var Request = function (request) {
    this.requestDate = request.requestDate;
    this.requestTime =  request.requestTime;
    this.jobCategory =  request.jobCategory;
    this.qualification = request.qualification;
    this.serviceProviderId = request.serviceProviderId;
    this.managerId = request.managerId;
}



// get all employees
Request.getAllRequest = (result) => {
    dbConn.query('SELECT * FROM requestform INNER JOIN serviceprovider ON requestform.serviceProviderId=serviceprovider.serviceProviderId', (err, res) => {
        if (err) {
            console.log('Error while fetching providers', err);
            result(null, err);
        } else {
            console.log('Providers fetched successfully');
            result(null, res);
        }
    })
}




// get employee by id
Request.getAllRequestByID = (id, result) => {
    dbConn.query('SELECT * FROM serviceprovider WHERE id=?', id, (err, res) => {
        if (err) {
            console.log('Error while fetching providers', err);
            result(null, err);
        } else {
            console.log('Providers fetched successfully');
            result(null, res);
        }
    })
}

Request.getRequestByID = (id, result) => {
    console.log("id", id);
    let query = "SELECT * FROM requestform INNER JOIN serviceprovider ON requestform.serviceProviderId=serviceprovider.serviceProviderId WHERE nic='" + id + "'";
    dbConn.query(query, (err, res) => {
        if (err) {
            console.log('Error while fetching providers', err);
            result(null, err);
        } else {
            console.log('Providers fetched successfully');
            result(null, res);
        }
    })
}


//create employee
Request.createRequest = (providerReqData, result) => {
    dbConn.query('INSERT INTO providers SET ? ', providerReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Employee created successfully');
            result(null, res)
        }
    })
}

// update employee
Request.updateRequest = (id, providerReqData, result) => {
    console.log(id);
    console.log("provider data",providerReqData);
    // dbConn.query("UPDATE serviceprovider SET firstName=?,lastName=?,contactNo=?,area=?,province=?,district=?,email=?,qualification=?,jobCategory=?,yearofExperiance=? WHERE nic='"+id+"'", 
    // [providerReqData.firstName,providerReqData.lastName,providerReqData.contactNo,providerReqData.area,
    // providerReqData.district,providerReqData.email,providerReqData.province,providerReqData.qualification,
    // providerReqData.yearOfExperiance,providerReqData.jobCategory,id], (err, res)=>{
    //     if(err){
    //         console.log('Error while updating the provider');
    //         result(null, err);
    //     }else{
    //         console.log("Provider updated successfully");
    //         result(null, res);
    //     }
    // });
    dbConn.query("UPDATE serviceprovider SET firstName=?,lastName=?,jobCategory=? WHERE nic='" + id + "'", 
    [providerReqData.firstName,providerReqData.lastName,providerReqData.jobCategory]
        , (err, res) => {
            if (err) {
                console.log('Error while updating the provider');
                result(null, err);
            } else {
                console.log("Provider updated successfully");
                result(null, res);
            }
        }
    );
}



module.exports = Request;
