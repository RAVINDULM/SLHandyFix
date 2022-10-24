var dbConn  = require('../../config/db.config');

var Complaint = function(complaint){
    this.complaintId = complaint.complaintId;
    this.complaintDate = complaint.complaintDate;
    this.complaintTime = complaint.complaintTime;
    this.description = complaint.description;
    this.customerId = complaint.customerId;
    this.serviceProviderId = complaint.serviceProviderId;
    this.managerId = complaint.managerId;
}

  

// get all employees
Complaint.getAllComplaints = (result) =>{
    dbConn.query('SELECT * FROM complaints', (err, res)=>{
        if(err){
            console.log('Error while fetching providers', err);
            result(null,err);
        }else{
            console.log('Providers fetched successfully');
            result(null,res);
        }
    })
}




// get employee by id
Complaint.getComplaintByID= (id, result) =>{
    console.log("id",id);
    let query = "SELECT * FROM complaints WHERE complaintId='"+id+"'";
    dbConn.query(query, (err, res)=>{
        if(err){
            console.log('Error while fetching providers', err);
            result(null,err);
        }else{
            console.log('Providers fetched successfully');
            result(null,res);
        }
    })
}

//create employee
Complaint.createProvider = (providerReqData, result) =>{
    dbConn.query('INSERT INTO providers SET ? ', providerReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Employee created successfully');
            result(null, res)
        }
    })
}

// update employee
Complaint.updateProvider = (id, providerReqData, result)=>{
    dbConn.query("UPDATE provider SET name=?,type=?,status=? WHERE id = ?", [providerReqData.name,providerReqData.type,providerReqData.status, id], (err, res)=>{
        if(err){
            console.log('Error while updating the provider');
            result(null, err);
        }else{
            console.log("Provider updated successfully");
            result(null, res);
        }
    });
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

module.exports = Complaint;
    