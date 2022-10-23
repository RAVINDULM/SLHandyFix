var dbConn  = require('../../config/db.config');
const sequelize =  require("sequelize");

var Manager = function(managers){
    this.name = managers.name
    this.gender=managers.gender;
    this.contact_no=managers.contact_no;
    this.email = managers.email;
    this.dob=managers.dob;
    this.address=managers.address;
}

Manager.addManger=(userReq,result)=>{
    
    console.log(userReq);
    dbConn.query('INSERT INTO managers SET ? ', userReq, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })

}

Manager.getManagerListfromdb=(result)=>{
    dbConn.query('SELECT * FROM managers', (err, res)=>{
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

