var dbConn  = require('../../config/db.config');
const sequelize =  require("sequelize");


var User = function(user){
    this.id = user.id;
    this.name = user.username;
    this.email = user.email;
    this.password = user.newpassword;
}

// get all employees
// User.getLogindetails = (result) =>{
//     dbConn.query('SELECT * FROM users', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Employees fetched successfully');
//             result(null,res);
//         }
//     })
// }

User.createUser = (userReqData , result) =>{

    console.log(userReqData);
    dbConn.query('INSERT INTO users SET ? ', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })
} 

// get user by email
User.getUserByName = ({ email: email} , result) =>{
   dbConn.query('SELECT * from users WHERE email = ?', email, (err, res)=>{
        if(err){
            console.log('Error while fetching user');
            result(null,err);
        }else{
            console.log('User fetched successfully');
            result(null,res); 
        }
    })
} 

// get employee by id
// Employee.getAllEmployeeByID= (id, result) =>{
//     dbConn.query('SELECT * FROM employees WHERE id=?', id, (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Employees fetched successfully');
//             result(null,res);
//         }
//     })
// }


module.exports = User;