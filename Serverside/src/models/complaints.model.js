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
    dbConn.query('SELECT *,r.firstName AS reg_firstName,s.firstName AS ser_firstName FROM complaints c INNER Join registeredcustomer r ON c.customerId=r.customerId INNER JOIN serviceprovider s ON c.serviceProviderId = s.serviceProviderId WHERE status=?',[0], (err, res)=>{
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
    let query = "SELECT *,r.firstName AS reg_firstName,s.firstName AS ser_firstName FROM complaints c INNER Join registeredcustomer r ON c.customerId=r.customerId INNER JOIN serviceprovider s ON c.serviceProviderId = s.serviceProviderId WHERE c.complaintId = '"+id+"'";
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

// //create employee
// Complaint.createProvider = (providerReqData, result) =>{
//     dbConn.query('INSERT INTO providers SET ? ', providerReqData, (err, res)=>{
//         if(err){
//             console.log('Error while inserting data');
//             result(null, err);
//         }else{
//             console.log('Employee created successfully');
//             result(null, res)
//         }
//     })
// }

// update employee
Complaint.updateComplaint = (id, providerReqData, result)=>{
    console.log(id);
    dbConn.query("UPDATE complaints SET status=? WHERE complaintId = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while updating the service');
            result(null, err);
        }else{
            console.log("Complaint updated successfully");
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
    