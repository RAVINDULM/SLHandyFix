var dbConn  = require('../../config/db.config');

var Service = function(service){
    // this.id = service.id;
    this.name = service.name;
    this.description = service.description;
    //this.numofemployeess	 = service.numofemployeess	;
}
  

// get all employees
Service.getAllServices = (result) =>{
    console.log("getallservices")
    dbConn.query('SELECT * FROM services', (err, res)=>{
        if(err){
            console.log('Error while fetching services', err);
            result(null,err); 
        }else{
            console.log("dbservices")
            console.log('Services fetched successfully');
            result(null,res);
        }
    })
}




// get employee by id
Service.getAllServiceByID= (id, result) =>{
    dbConn.query('SELECT * FROM services WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching services', err);
            result(null,err);
        }else{
            console.log('Services fetched successfully');
            result(null,res);
        } 
    })
}

//create employee
Service.createService = (serviceReqData, result) =>{
    console.log("createservices",serviceReqData)

    dbConn.query('INSERT INTO services SET ? ', serviceReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Services created successfully');
            result(null, res)
        }
    })
}

// update employee
Service.serviceEmployee = (id, serviceReqData, result)=>{
    dbConn.query("UPDATE services SET name=?,description=? WHERE id = ?", [serviceReqData.name,serviceReqData.description, id], (err, res)=>{
        if(err){
            console.log('Error while updating the service');
            result(null, err);
        }else{
            console.log("Service updated successfully");
            result(null, res);
        }
    });
}

// delete employee
// Service.deleteService = (id, result)=>{
//     // dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
//     //     if(err){
//     //         console.log('Error while deleting the employee');
//     //         result(null, err);
//     //     }else{
//     //         result(null, res);
//     //     }
//     // })
//     dbConn.query("UPDATE service SET status=? WHERE id = ?", [0, id], (err, res)=>{
//         if(err){
//             console.log('Error while deleting the employee');
//             result(null, err);
//         }else{
//             console.log("Employee deleted successfully");
//             result(null, res);
//         }
//     });
// }

module.exports = Service;
    