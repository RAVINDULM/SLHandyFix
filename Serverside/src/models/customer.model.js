var dbConn  = require('../../config/db.config');

var Customer = function(customer){
    //this.customerId = customer.customerId;
    this.contactNo = customer.contactNo;
    this.firstName = customer.firstName;
    this.contactNo = customer.contactNo;
    this.lastName = customer.lasttName;
    this.nic = customer.nic;
    this.area = customer.area;
    this.province= customer.province;
    this.district = customer.district;
    this.gender= customer.gender;
    this.email = customer.email;
}
  

// get all employees
Customer.getAllCustomers = (result) =>{
    console.log("getallservices")
    dbConn.query('SELECT * FROM registeredcustomer', (err, res)=>{
        if(err){
            console.log('Error while fetching services', err);
            result(null,err);
        }else{
            
            console.log('Customers fetched successfully');
            result(null,res);
        }
    })
}




// get employee by id
Customer.getAllCustomerByID= (id, result) =>{
    dbConn.query('SELECT * FROM registeredcustomer WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching data', err);
            result(null,err);
        }else{
            console.log('Services fetched successfully');
            result(null,res);
        }
    })
}
Customer.getCustomerByID= (id, result) =>{
    console.log("id",id);
    let query = "SELECT * FROM registeredcustomer WHERE nic='"+id+"'";
    dbConn.query(query,  (err, res)=>{
        if(err){
            console.log('Error while fetching data', err);
            result(null,err);
        }else{
            console.log('Services fetched successfully');
            result(null,res);
        }
    })
}




module.exports = Customer;
    