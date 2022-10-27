var dbConn  = require('../../config/db.config');
const sequelize =  require("sequelize");
const { use } = require('../routes/admin.route');

var Manager = function(managers){
    this.firstName = managers.firstName;
    this.lastName=managers.lastName;
    this.gender=managers.gender;
    this.contactNo=managers.contactNo;
    this.email = managers.email;
    this.nic=managers.nic;
    this.address=managers.address;
}

Manager.addManger=(userReq,result)=>{
    
    console.log(userReq);
    dbConn.query('INSERT INTO manager (contactNo,firstName,lastName,nic,area,gender,email,userId) values (?,?,?,?,?,?,?,?) ', [userReq.contactNo,userReq.firstName,userReq.lastName,userReq.nic,userReq.address,userReq.gender,userReq.email,userReq.userid], (err, res)=>{
        if(err){
            console.log('Error while inserting data',err);
            result(null, err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })

}

Manager.getManagerListfromdb=(result)=>{
    dbConn.query('SELECT * FROM manager', (err, res)=>{
        if(err){
            console.log('Error while fetching manager', err);
            result(null,err);
        }else{
            console.log(typeof(result.contact_no))
            console.log('manager fetched successfully');
            result(null,res);
        }
    })

}
module.exports = Manager;

