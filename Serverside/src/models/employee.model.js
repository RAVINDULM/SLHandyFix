var dbConn  = require('../../config/db.config');

var Employee = function(employee){
    this.id = employee.id;
    this.name = employee.name;
    this.type = employee.type;
    this.status = employee.status;
}
  

// get all employees
Employee.getAllEmployees = (result) =>{
    dbConn.query('SELECT * FROM employees', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}




// get employee by id
Employee.getAllEmployeeByID= (id, result) =>{
    dbConn.query('SELECT * FROM employees WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}

//create employee
Employee.createEmployee = (employeeReqData, result) =>{
    dbConn.query('INSERT INTO employees SET ? ', employeeReqData, (err, res)=>{
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
Employee.updateEmployee = (id, employeeReqData, result)=>{
    dbConn.query("UPDATE employees SET name=?,type=?,status=? WHERE id = ?", [employeeReqData.name,employeeReqData.type,employeeReqData.status, id], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("Employee updated successfully");
            result(null, res);
        }
    });
}

// delete employee
Employee.deleteEmployee = (id, result)=>{
    // dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the employee');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE employees SET status=? WHERE id = ?", [0, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the employee');
            result(null, err);
        }else{
            console.log("Employee deleted successfully");
            result(null, res);
        }
    });
}

module.exports = Employee;
    