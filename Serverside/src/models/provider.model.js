const { query } = require('../../config/db.config');
var dbConn = require('../../config/db.config');

var Provider = function (provider) {
    this.contactNo = provider.contactNo;
    this.firstName = provider.firstName;
    this.contactNo = provider.contactNo;
    this.lastName = provider.lasttName;
    this.nic = provider.nic;
    this.area = provider.area;
    this.province = provider.province;
    this.district = provider.district;
    this.gender = provider.gender;
    this.email = provider.email;

    this.qualification = provider.qualification;
    this.jobCategory = provider.jobCategory;
    this.yearOfExperiance = provider.yearOfExperiance;
}



// get all employees
Provider.getAllProviders = (result) => {
    dbConn.query('SELECT * FROM serviceprovider', (err, res) => {
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
Provider.getAllProviderByID = (id, result) => {
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

Provider.getProviderByID = (id, result) => {
    console.log("id", id);
    let query = "SELECT * FROM serviceprovider WHERE nic='" + id + "'";
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
Provider.createProvider = (providerReqData, result) => {
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
Provider.updateProvider = (id, providerReqData, result) => {
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

// delete employee
// Employee.deleteEmployee = (id, result)=>{
//     // dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
//     //     if(err){
//     //         console.log('Error while deleting the employee');
//     //         result(null, err);
//     //     }else{
//     //         result(null, res);
//     //     }
//     // })
//     dbConn.query("UPDATE employees SET status=? WHERE id = ?", [0, id], (err, res)=>{
//         if(err){
//             console.log('Error while deleting the employee');
//             result(null, err);
//         }else{
//             console.log("Employee deleted successfully");
//             result(null, res);
//         }
//     });
// }

module.exports = Provider;
