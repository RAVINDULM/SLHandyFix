var dbConn  = require('../../config/db.config');
const sequelize =  require("sequelize");

var Manager = function(manager){
    this.name = manager.name
    this.gender=manager.gender;
    this.contact_no=manager.contact_no;
    this.email = manager.email;
    this.dob=manager.dob;
    this.address=manager.address;
}

Manager.addManger=(userReq,result)=>{
    console.log(userReq);

    dbConn.query('INSERT INTO manager SET ? ', userReq, (err, res)=>{
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

