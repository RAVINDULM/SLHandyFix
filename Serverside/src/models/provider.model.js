var dbConn  = require('../../config/db.config');

var Provider = function(provider){
    this.id = employee.id;
    this.name = employee.name;
    this.type = employee.type;
    this.status = employee.status;
}
  

// get all employees
Provider.getAllProviders = (result) =>{
    dbConn.query('SELECT * FROM providers', (err, res)=>{
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
Provider.getAllProviderByID= (id, result) =>{
    dbConn.query('SELECT * FROM providers WHERE id=?', id, (err, res)=>{
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
Provider.createProvider = (providerReqData, result) =>{
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
Provider.updateProvider = (id, providerReqData, result)=>{
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

module.exports = Provider;
    