var dbConn  = require('../../config/db.config');
const sequelize =  require("sequelize");


var User = function(user){
    this.id = user.id;
    this.name = user.username;
    this.email = user.email;
    this.password = user.newpassword;
<<<<<<< HEAD
    this.contact_no = user.contact_no;
    this.usertype=user.usertype;
=======
    this.contact_no=user.contact_no;
    this.usertype = user.usertype;
>>>>>>> 5222fff369b51f2c6d72e043d41cf5c045629ded
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

    console.log("Regiter data model: ",userReqData);
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

User.getUserBycontact=({contact_no:contact_no},result)=>{
    console.log("database heree")
    dbConn.query('SELECT contact_no FROM users WHERE contact_no=?',contact_no,(err,res)=>{
        if(err){
            console.log('Error while fetching user');
            result(null,err);
        }else{
            console.log('User fetched successfully');
            result(null,res); 
        }
    })

}

User.updatePasswordUserBycontact=({contact_no:contact_no,password:password},result)=>{
    dbConn.query('UPDATE users SET password =?  WHERE contact_no=?',[password,contact_no],(err,res)=>{
        if(err){
            console.log('Error while fetching user');
            result(null,err);
        }else{
            console.log('User updated successfully');
            result(null,res); 
        }
    })

}
User.createManageruser = (userReqData , result) =>{

    console.log(typeof(userReqData.id));
    console.log("model create manager",userReqData);
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

module.exports = User;